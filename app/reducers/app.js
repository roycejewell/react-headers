import {
  INITIAL,
  LOADING,
} from 'actions/app';

export const initialState = {
  initial: true,
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INITIAL:
      return {
        ...state,
        initial: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
