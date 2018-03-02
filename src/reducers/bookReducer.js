import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;

    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
