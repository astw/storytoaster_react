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
    let theBook = this.props.book;   
    let id = "canvas_" + theBook.id;
    const canvas = new fabric.Canvas(id);    
    let scale = 170 / theBook.frontCover.width;
    var canvasWidth = 170;
    var canvasHeight = 127;
    canvas.setWidth(canvasWidth);
    canvas.setHeight(canvasHeight); 

    var  storyTextBox = new fabric.IText ('StoryToasterIText',{
      fontSize: 16,
      width:200,
      height:600,
      fontFamily: 'Arial',
      textAlign: 'left'
    });

    canvas.add(storyTextBox);

    var storyTextBox2 = new fabric.IText ('StoryToasterIText2',{
      fontSize: 16,
      width:200,
      height:600,
      fontFamily: 'Arial',
      textAlign: 'left'
    });

    canvas.add(storyTextBox2);

    let content  = JSON.stringify(canvas);
    console.log("origin:", content); 

    let imageData = JSON.parse(theBook.frontCover.imageData);
    imageData.objects = imageData.objects.map(function(item){
       if(item.src='http://storytoaster.com/assets/images/blank.jpg'){
         item.src="";
         console.log("clear src")
       } 

      //  if(item.type =='storyToasterIText'){
      //     item.type = 'storyToasterIText';
      //  }

      // item.version="2.1.0";

      //  let newItem = Object.assign({version:"2.1.0"}, item); 
      //  return newItem; 
      return item;
    }); 
    // imageData.version = "2.1.0"; 
    // imageData = Object.assign({version:"2.1.0"}, imageData);  
    theBook.frontCover.imageData = JSON.stringify(imageData);  

    canvas.clear();  
 
    content = JSON.stringify(imageData);  

    canvas.loadFromJSON(content, canvas.renderAll.bind(canvas), function(o, object) {
        fabric.log(o, object);
    });
 
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