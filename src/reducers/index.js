import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import books from "./bookReducer";
import images from "./imageReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  books,
  images,
  ajaxCallsInProgress
});

export default rootReducer;
