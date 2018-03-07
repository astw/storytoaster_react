import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

import { books as localbooks } from "../components/books/LocalBooks.json";
import bookApiProxy from '../api/bookApi';

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return bookApiProxy.getBooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      })
      .catch(err => {
        throw err;
      });
  };
}
