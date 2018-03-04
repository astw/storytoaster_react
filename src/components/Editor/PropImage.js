import React, { PropTypes } from "react";

const PropImage = (image) =>{   
    return(
         <img src={image.thumb} width="70" height="70" /> 
    );
}

export default PropImage;