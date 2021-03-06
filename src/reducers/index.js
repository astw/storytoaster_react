import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import books from "./bookReducer";
import propImages from "./propImageReducer";
import backgroundImages from "./backgroundImageReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  books,
  propImages,
  backgroundImages,
  ajaxCallsInProgress
});

export default rootReducer;
