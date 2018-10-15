import React, { Component } from 'react';
import HorizontalSliderVatPanel from '../HorizontalSliderVatPanel/HorizontalSliderVatPanel';

class HorizontalSliderVotePanel extends Component {

    state = {
        vats: [
          {title: "Läsk", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Kaffe", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Mjölk", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Choklad", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Rejuvelac", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Svart te", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Grönt te", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Roibos", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Buljong", val: 25, img:"soda.jpg", isLocked: false},
          {title: "Mineralvatten", val: 25, img:"soda.jpg", isLocked: false},
        ]
    }

    renderVats() {
      return (
        <div>
          {
            this.state.vats.map( (val, index) => {return (
              <HorizontalSliderVatPanel 
                vat={this.state.vats[index]} 
              />  
            )})
          }
        </div>
      );

    }

    render() {
      return (
        <div>
            {this.renderVats()}
        </div>
      );
    }
    
}

export default HorizontalSliderVotePanel;
