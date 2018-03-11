import React, { PropTypes } from "react";
import appStyle from "../../styles/editor-left-panel.css";

const PropImage = (props) =>{
    return(
         <img className ="nav-image" src={props.thumb} onClick = {props.chooseImage(props.id)}  />
    );
}

// PropImage.propTypes = {
//   image:PropTypes.object.shape({
//     thumb: PropTypes.string.isRequired
//   }),
//
//   chooseImage: PropTypes.function.isRequired
// }

export default PropImage;
