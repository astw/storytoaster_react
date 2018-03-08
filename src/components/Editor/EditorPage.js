import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActions from "../../actions/ImageActions";
import configureStore from "../../store/configureStore";
import PropImage from "./PropImage";
import NavAccording from "./PicturesNav";

import Button from "material-ui/Button";

class EditorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
    this.props.actions.loadPropImages();
    this.props.actions.loadBackgroundImages();
  }

  render() {
    return (
      <div className="left-nav">
        <h1>images</h1>

        <Button variant="fab" color="primary">
          // <ContentAdd />
        </Button>

        <NavAccording
          propImages={this.props.propImages}
          backgroundImages={this.props.backgroundImages}
        />
        <div className="clear" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    propImages: state.propImages,
    backgroundImages: state.backgroundImages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
