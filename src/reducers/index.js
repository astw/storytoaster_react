import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import books from "./bookReducer";
import propImages from "./imageReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  books,
  propImages,
  ajaxCallsInProgress
});

export default rootReducer;
