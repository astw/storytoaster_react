import React, { PropTypes } from "react";
import { connect } from "react-redux";
import fabric from "fabric";
import bookStyle from '../../styles/book-style.less';
import appStyle from "../../styles/styles.css";

console.log("appStyle", appStyle);
console.log("styles:", bookStyle);

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
    const canvas = new fabric.Canvas(id);

    var IText = new fabric.IText("IText", {
      fontSize: 18,
      //fontFamily: 'Arial',
      //textAlign: 'center',
      //width: 120,
      //height: 60
    });
    canvas.add(IText);

    // canvas.loadFromJSON(
    //   this.state.book.frontCover.imageData,
    //   function() {},
    //   function(o, obj) {
    //     obj.selectable = false;
    //     obj.hoverCursor = "pointer";
    //   }
    // );
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
