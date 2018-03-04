import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActions from "../../actions/ImageActions";  
import configureStore from "../../store/configureStore";
import PropImage from "./PropImage";

class EditorPage extends React.Component {

   constructor(props, context) {
    super(props, context);
    this.state = {};
   }

  componentWillMount() {   
    this.props.actions.loadPropImages();
  }

  render() {  
    
    let {store} = this.context;

    debugger; 
    const { propImages } = this.props;   
    return (
      <div>
        <h1>images</h1>
          { propImages.map(image => <PropImage {...image} />)}
          <div className="clear" />  
       </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    propImages: state.propImages
  };
} 

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
