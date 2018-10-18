import React, { Component } from 'react';
import HorizontalSliderVatPanel from '../HorizontalSliderVatPanel/HorizontalSliderVatPanel';

class HorizontalSliderVotePanel extends Component {

    state = {
        vats: [
          {title: "Läsk", val: 25, img:"soda2.jpg", isLocked: false},
          {title: "Kaffe", val: 25, img:"coffee.png", isLocked: false},
          {title: "Mjölk", val: 25, img:"milk.jpg", isLocked: false},
          {title: "Choklad", val: 25, img:"hot_chokolate.jpg", isLocked: false},
          {title: "Rejuvelac", val: 25, img:"rejuvelac.jpg", isLocked: false},
          {title: "Svart te", val: 25, img:"black_tea.png", isLocked: false},
          {title: "Grönt te", val: 25, img:"green_tea.jpg", isLocked: false},
          {title: "Roibos", val: 25, img:"roibos.jpg", isLocked: false},
          {title: "Buljong", val: 25, img:"broth.jpg", isLocked: false},
          {title: "Mineralvatten", val: 25, img:"mineral_water2.png", isLocked: false},
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
