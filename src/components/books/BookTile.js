import React, { PropTypes } from "react";
import { connect } from "react-redux";
import fabric from "fabric";

export class BookTile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, props.book),
      errors: {},
      saving: false
    };
  }

  componentDidMount() {
    debugger;
    let id = "canvas_" + this.state.book.id;
    const can = new fabric.Canvas(id);
    can.loadFromJSON(
      this.state.book.frontCover.imageData,
      function() {},
      function(o, obj) {
        obj.selectable = false;
        obj.hoverCursor = "pointer";
      }
    );
  }

  render() {
    let id = "canvas_" + this.state.book.id;
    return (
      <div className="book-panel-small">
        <canvas className="book-preview-image" id={id} />
        <div className="p8 book-title">{this.state.book.title}</div>
      </div>
    );
  }
}

export default BookTile;
