import React, { PropTypes } from "react";
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses }) => {
  debugger;
  console.log("2:", courses);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <CourseListRow key={course.id} course={course} />
        ))}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
