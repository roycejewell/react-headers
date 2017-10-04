export const INITIAL = 'INITIAL';
export const LOADING = 'LOADING';

export function initial(payload) {
  return {
    type: INITIAL,
    payload: payload
  };
}

export function loading(payload) {
  return {
    type: LOADING,
    payload: payload
  };
}

export function initialLoad() {
  return (dispatch) => {
    setTimeout(()=> {
      dispatch(initial(false));
      dispatch(loading(false));
    }, 1200);
  };
}
