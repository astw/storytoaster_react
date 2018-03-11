// to design one canvas page
import React, { PropTypes } from "react";

import appStyle from "../../styles/page-designer.css";

const PageDesigner = (props) =>{
    return(
      <div className="page-big active" onClick= { props.handleClick}  >
        <canvas className="page-canvas" crossOrigin="Anonymous" id="left_canvas" ></canvas>
      </div>
    );
};

export default PageDesigner;
