
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

import { books as localbooks } from "../components/books/LocalBooks.json";
import bookApiProxy from '../api/bookApi';

export function pageRightClicked(){
     return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}
