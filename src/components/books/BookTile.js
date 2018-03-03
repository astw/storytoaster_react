import React, { PropTypes } from "react";
import { connect } from "react-redux";
import fabric from "fabric";
import bookStyle from '../../styles/book-style.less';
import appStyle from "../../styles/styles.css";
import { books as localbooks } from "./LocalBooks.json";
import storyToasterTextBox from './storyToasterTextBox';

debugger;

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

    let theBook = localbooks[0];
    let id = "canvas_" + theBook.id;
    const canvas = new fabric.Canvas(id);

    var IText = new fabric.IText("IText", {
      fontSize: 18,
      fontFamily: 'Arial',
      textAlign: 'center',
      width: 120,
      height: 60
    });
    canvas.add(IText);

    let scale = 170 / theBook.frontCover.width;
    var canvasWidth = 170;
    var canvasHeight = 127;
    canvas.setWidth(canvasWidth);
    canvas.setHeight(canvasHeight);
    canvas.loadFromJSON(
      theBook.frontCover.imageData,
      function () { },
      function (o, obj) {
        obj.selectable = false;
        obj.hoverCursor = "pointer";
      }
    );

    canvas.setZoom(scale);
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
