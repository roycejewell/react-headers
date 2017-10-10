import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const headerTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export const animationTypes = {
  fadeIn: 'fadeIn',
  fadeInUpSmall: 'fadeInUpSmall',
  fadeInUp: 'fadeInUp',
  fadeInUpBig: 'fadeInUpBig',
  slideInUpSmall: 'slideInUpSmall',
  slideInUp: 'slideInUp',
  slideInUpBig: 'slideInUpBig',
};

function renderHeaders({ children, headerStyle, headerType, fontFamilyClass }) {
  console.log(headerStyle);
  switch (headerType) {
    case headerTypes.h1:
      return <h1 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h1>;
    case headerTypes.h2:
      return <h2 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h2>;
    case headerTypes.h3:
      return <h3 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h3>;
    case headerTypes.h4:
      return <h4 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h4>;
    case headerTypes.h5:
      return <h5 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h5>;
    case headerTypes.h6:
      return <h6 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h6>;
    default:
      return <h1 className={`${ fontFamilyClass } react-header`} style={ headerStyle }>{ children }</h1>;
  }
}

function ReactHeader (props) {
  const {
    headerType,
    fontSize,
    fontFamilyClass,
    lineHeight,
    letterSpacing,
    color,
    animationDelay,
    animationDuration,
    animationEasing,
    animationType,
    beginHidden,
    margin,
    padding,
    children
  } = props;

  const headerStyle = {
    fontSize: fontSize || '2rem',
    lineHeight: lineHeight || '2rem',
    letterSpacing: letterSpacing || '0.3',
    color: color || 'black',
    animationDelay: animationDelay || '0s',
    animationDuration: animationDuration || '0.6s',
    animationTimingFunction: animationEasing || 'ease',
    animationName: animationType || 'fadeIn',
    opacity: beginHidden ? '0' : '1',
  };

  const containerStyle = {
    margin: margin,
    padding: padding,
  };




  return (
    <div style={ containerStyle } className='react-header-container'>
      { renderHeaders({ children, headerStyle, headerType, fontFamilyClass }) }
    </div>
  );
}

export default ReactHeader;
