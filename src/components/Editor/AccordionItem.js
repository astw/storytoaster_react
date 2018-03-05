import React, {PropTypes} from 'react'; 
import { Accordion, Icon } from 'semantic-ui-react'
import PropImage from './PropImage';

class AccordionItem extends React.Component {
    
    //(images, title, activeIndex, onclick) => {

        constructor(props, context) {
            super(props, context);
            this.state = {};
          }

    render()
    {  
       console.log(this.props.images);

    return(  
            [<Accordion.Title active={this.props.activeIndex === 0} index={0} onClick={this.props.onclick}>
            <Icon name='dropdown' />
            {this.props.title}
            </Accordion.Title>,
            <Accordion.Content active={this.props.activeIndex === 0}>
                
                {this.props.images.map(image=>{
                    <PropImage key={image.id} {...image}  />
                })}

            </Accordion.Content>  
            ]
     ) 
   };
};

AccordionItem.propTypes = {
    images: PropTypes.array.isRequired
  };

export default AccordionItem;