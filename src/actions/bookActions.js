import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

import { books as localbooks } from "../components/books/LocalBooks.json";

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    let url = "http://localhost:1337/books?count=42&mode=random";

    return fetch(url)
      .then(resp => resp.json()) // Transform the data into json
      .then(function (books) {
        // books = localbooks;
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}
