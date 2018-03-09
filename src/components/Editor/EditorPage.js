import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActions from "../../actions/ImageActions";
import configureStore from "../../store/configureStore";
import PropImage from "./PropImage";
import NavAccording from "./PicturesNav";
import LeftPanelModal from './LeftPanelModal';

import Button from "material-ui/Button";
import AddIcon from 'material-ui-icons/Add';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


  const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


class EditorPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  componentWillMount() {
    this.props.actions.loadPropImages();
    this.props.actions.loadBackgroundImages();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="editor">
        <div className="left-nav">
           <LeftPanelModal open={this.state.open} handleClose={this.handleClose} />

          <h1>images</h1>
           <NavAccording
            propImages={this.props.propImages}
            backgroundImages={this.props.backgroundImages}
          />
          <div className="clear" />
             <Button variant="fab" color="primary" className="fab" onClick={this.handleOpen}>
                      <AddIcon />
             </Button>
        </div>
         <div className="clear"></div>
      </div>
    );
  }
}

EditorPage.propTypes = {
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

const EditorPageWrapped = withStyles(styles)(EditorPage);
export default connect(mapStateToProps, mapDispatchToProps)(EditorPageWrapped);

//export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
