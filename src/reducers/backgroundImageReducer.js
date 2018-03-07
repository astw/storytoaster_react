import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function backgroundImageReducer(state = initialState.backgroundImages, action) {
  switch (action.type) { 

    case types.LOAD_BACKGROUND_IMAGES_SUCCESS:
      return action.backgroundImages;

    default:
      return state;
  }
}
