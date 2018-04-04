
import * as types from "./actionTypes";  

export function pageLeftClicked(pageIndex){
  return {type: types.PAGE_LEFT_CLICKED, pageIndex};
}

export function pageRightClicked(pageIndex){
  return {type: types.PAGE_RIGHT_CLICKED, pageIndex};
}
