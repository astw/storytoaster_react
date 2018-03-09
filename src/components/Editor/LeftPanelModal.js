import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActions from "../../actions/ImageActions";
import configureStore from "../../store/configureStore";
import PropImage from "./PropImage";
import NavAccording from "./PicturesNav";

import Button from "material-ui/Button";
import AddIcon from 'material-ui-icons/Add';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

  const styles = theme => ({
  paper: {
    width: "25%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 10,
    margin: "10 auto"
  },
});


class LeftPanelModal extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    this.props.actions.loadPropImages();
    this.props.actions.loadBackgroundImages();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
          <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                  >
                  <div   className={classes.paper, 'center-modal'}>
                      <NavAccording
                        panelClass = "image-panel"
                        propImages={this.props.propImages}
                        backgroundImages={this.props.backgroundImages}
                      />
                  </div>
            </Modal>
       </div>
    );
  }
}

LeftPanelModal.propTypes = {
   classes: PropTypes.object.isRequired
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

const LeftPanelModalWrapped = withStyles(styles)(LeftPanelModal);
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelModalWrapped);
