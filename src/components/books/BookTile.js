import React, { PropTypes } from "react";
import { connect } from "react-redux";
import fabric from "fabric";
import bookStyle from '../../styles/book-style.less';
import appStyle from "../../styles/styles.css";
import { books as localbooks } from "./LocalBooks.json";
import storyToasterTextBox from './storyToasterTextBox';
 

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

   // let theBook = this.props.book;   // localbooks[0];
   let theBook = localbooks[0];
    let id = "canvas_" + theBook.id;
    const canvas = new fabric.Canvas(id);    
    let scale = 170 / theBook.frontCover.width;
    var canvasWidth = 170;
    var canvasHeight = 127;
    canvas.setWidth(canvasWidth);
    canvas.setHeight(canvasHeight); 

    // let imageData = JSON.parse(theBook.frontCover.imageData);
    // imageData.objects = imageData.objects.map(function(item){
    //    if(item.src='http://storytoaster.com/assets/images/blank.jpg'){
    //      item.src="";
    //      console.log("clear src")
    //    } 
    //   // item.version="2.1.0";
    //    return item; 
    // }); 

    // theBook.frontCover.imageData = JSON.stringify(imageData);  
    
    canvas.loadFromJSON(
      theBook.frontCover.imageData,
      function(){},
      function (o, obj) {
        if(obj){ 
          obj.selectable = false;
          obj.hoverCursor = "pointer";
        }
      }
    ); 
    canvas.setZoom(scale);  
  }

  render() {
    let id = "canvas_" + this.state.book.id;
    return (
      <div className="book-panel-small">
        <canvas className="book-preview-image" id={id}  crossOrigin="Anonymous"  />
        <div className="p8 book-title">{this.state.book.title}</div>
      </div>
    );
  }
}

export default BookTile;
