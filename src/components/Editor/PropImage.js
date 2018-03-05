import React, { PropTypes } from "react";
import appStyle from "../../styles/editor.css";

const PropImage = (image) =>{   
    return(
         <img className ="nav-image" src={image.thumb} /> 
    );
}

export default PropImage;