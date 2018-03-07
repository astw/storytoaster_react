import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function imageReducer(state = initialState.propImages, action) {
  switch (action.type) {
    case types.LOAD_PROP_IMAGES_SUCCESS:
      return action.propImages;

    default:
      return state;
  }
}
