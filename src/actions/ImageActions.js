import * as types from './actionTypes';
import imageApi from '../api/imageApiProxy';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPropImagesSuccess(propImages) {
  return { type: types.LOAD_PROP_IMAGES_SUCCESS, propImages};
}
  
export function loadPropImages() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return imageApi.getPropImages().then(images => {
      dispatch(loadPropImagesSuccess(images));
    }).catch(error => {
      throw(error);
    });
  };
} 