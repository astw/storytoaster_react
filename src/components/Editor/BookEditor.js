import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActions from "../../actions/ImageActions";
import * as editorActions from "../../actions/editorActions";

import configureStore from "../../store/configureStore";
import PropImage from "./PropImage";
import NavAccording from "./PicturesNav";
import LeftPanelModal from './LeftPanelModal';
import PageDesigner from './PageDesigner';

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


class BookEditor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  };

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

  designerRightClicked = () =>{
     console.log('right page design click');
     this.props.editorActions.pageRightClicked();
  };

  designerLeftClicked = () =>{
     console.log('left right page design click');
     this.props.editorActions.pageLeftClicked();
  };

  isPageActive = ()=>{
      console.log('is page active?');
      return true;
  }

  componentWillMount() {
    this.props.actions.loadPropImages();
    this.props.actions.loadBackgroundImages();
  }
  // <div className="left-nav">
  //    <LeftPanelModal open={this.state.open} handleClose={this.handleClose} />
  //
  //   <div className="clear" />
  //
  // </div>
  // <NavAccording
  //  propImages={this.props.propImages}
  //  backgroundImages={this.props.backgroundImages}
  // />

  render() {
    const { classes } = this.props;
    ///... logic to determine which one is active;
    const leftActive = true;
    const rightActive = false;

    return (
      <div className="book-editor">
        <LeftPanelModal open={this.state.open} handleClose={this.handleClose} />
            <div className="clear" />
        <Button variant="fab" color="primary" className="fab" onClick={this.handleOpen}>
                 <AddIcon />
        </Button>
        <div className='editor'>
          <div className="{page-big `${leftActive}` }" onClick= { this.designerLeftClicked  }  >
            <canvas className="page-canvas" crossOrigin="Anonymous" id="left_canvas" ></canvas>
          </div>
          <div className="page-big `${rightActive}` }" onClick= { this.designerRightClicked  }  >
            <canvas className="page-canvas" crossOrigin="Anonymous" id="right_canvas" ></canvas>
          </div>
        </div>

        <div className="page-designer-panel">
        </div>
         <div className="clear"></div>
      </div>
    );
  }
}

BookEditor.propTypes = {
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
    actions: bindActionCreators(imageActions, dispatch),
    editorActions: bindActionCreators(editorActions, dispatch)
  };
}

const BookEditorWrapped = withStyles(styles)(BookEditor);
export default connect(mapStateToProps, mapDispatchToProps)(BookEditorWrapped);

//export default connect(mapStateToProps, mapDispatchToProps)(BookEditor);
