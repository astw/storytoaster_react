import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    let url = "http://stapi.storytoaster.com/books?count=20&mode=random";

    return fetch(url)
      .then(resp => resp.json()) // Transform the data into json
      .then(function (books) {
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}
