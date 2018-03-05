import React, { Component } from 'react' 
import PropImage from './PropImage';
//import AccodionItem from './AccordionItem';  

export default class NavAccording extends React.Component  {

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
    const { activeIndex } = this.state; 

    return (  
      <div>
         { this.props.propImages.map(image => <PropImage key={image.id} {...image} />)} 
      </div>
    )
  }
}