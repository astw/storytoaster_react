import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function imageReducer(state = initialState.propImages, action) {
  console.log('... in reducer .......', action.type)
  switch (action.type) {
    case types.LOAD_PROP_IMAGES_SUCCESS:
      return action.propImages;

    case types.LOAD_BACKGROUND_IMAGES_SUCCESS:
      console.log('---reducer ......,  LOAD_BACKGROUND_IMAGES_SUCCESS', action.backgroundImages, state);
      return action.backgroundImages;

    default:
      return state;
  }
}
