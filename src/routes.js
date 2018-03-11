import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage"; //eslint-disable-line import/no-named-as-default
import BookListPage from "./components/books/BookListPage";
import BookEditor from "./components/Editor/BookEditor";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="books" component={BookListPage} />
    <Route path="editor" component={BookEditor} />
    <Route path="about" component={AboutPage} />
  </Route>
);
