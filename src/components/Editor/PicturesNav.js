import React, { Component } from 'react'
import PropImage from './PropImage';
//import AccodionItem from './AccordionItem';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "4px"
  },
  SummaryDetails: {
    padding: "4px"
  }
});


class NavAccording extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeIndex: 0 }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    console.log(this.props);

    const { classes } = this.props;

    return (
      <div>
        {/* {this.props.propImages.map(image => <PropImage key={image.id} {...image} />)} */}
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Props</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.SummaryDetails} >
              <div className='left-nav content'>
                {this.props.propImages.map(image => <PropImage className="nav-image" key={image.id} {...image} />)}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Background Picture</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.SummaryDetails} >
              <div className='left-nav content'>
                {this.props.backgroundImages.map(image => <PropImage className="nav-image" key={image.id} {...image} />)}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <div className='left-nav content'>
              {this.props.propImages.map(image => <PropImage className="nav-image" key={image.id} {...image} />)}
            </div>
          </ExpansionPanel>
        </div>
      </div>
    )
  }
}

NavAccording.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavAccording);
