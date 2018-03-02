import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class BookTile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, props.book),
      errors: {},
      saving: false
    };
  }

  componentDidMount( ) {

  }

  updateCourseState(event) {}

  render() {
    return (
       <div className="book-panel-small" >
         <canvas className="book-preview-image" id="canvas_me"  />
         <div className="p8 book-title">
            {this.state.book.title}
          </div>
     </div>
    );
  }
}

export default BookTile;
