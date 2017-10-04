import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Nav from 'components/Nav';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { windowHeight } from 'services/windowSize';
//import GA from 'services/gaService';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderChildren(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      actions: props.actions,
      children: props.children,
      location: props.location,
      router: props.router,
      state: props.state
    });
  });
}

function renderDevTools () {
  if (process.env.NODE_ENV === 'development') {
    const DevTools = require('../../components/DevTools').default;
    return <DevTools />;
  }
  return null;
}


class MainWrapper extends Component {

  componentDidMount() {
    //Uncomment to enable Google Analytics Page Tracking
    //GA.pageload(this.props.location.pathname);
    this.props.actions.app.initialLoad();
  }

  componentWillReceiveProps(nextProps) {

    if (process.env.BROWSER && this.props.location.pathname !== nextProps.location.pathname) {
      window.scrollTo(0, 0);
      //Uncomment to enable Google Analytics Page Tracking
      //GA.pageload(nextProps.location.pathname);
    }
  }

  render () {
    return (
      <div style={{minHeight: windowHeight(768, -275, 150)}}>
        <Header
          location={ this.props.location }
        />
        <Nav />
        <main
          role="main"
          aria-live='polite'
          aria-relevant='additions removals'
          className='clearfix'>
          { renderChildren(this.props) }
        </main>
        <Footer />
        { renderDevTools() }
      </div>
    );
  }
}

MainWrapper.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default withRouter(MainWrapper);
