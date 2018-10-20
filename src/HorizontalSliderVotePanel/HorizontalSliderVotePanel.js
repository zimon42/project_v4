import React, { Component } from 'react';
import HorizontalSliderVatPanel from '../HorizontalSliderVatPanel/HorizontalSliderVatPanel';

class HorizontalSliderVotePanel extends Component {

    state = {
        vats: [
          {title: "Läsk", val: 0, img:"soda2.jpg", isLocked: false},
          {title: "Kaffe", val: 0, img:"coffee.png", isLocked: false},
          {title: "Mjölk", val: 0, img:"milk.jpg", isLocked: false},
          {title: "Choklad", val: 0, img:"hot_chokolate.jpg", isLocked: false},
          {title: "Rejuvelac", val: 0, img:"rejuvelac.jpg", isLocked: false},
          {title: "Svart te", val: 0, img:"black_tea.png", isLocked: false},
          {title: "Grönt te", val: 0, img:"green_tea.jpg", isLocked: false},
          {title: "Roibos", val: 0, img:"roibos.jpg", isLocked: false},
          {title: "Buljong", val: 0, img:"broth.jpg", isLocked: false},
          {title: "Mineralvatten", val: 0, img:"mineral_water2.png", isLocked: false},
        ],
        mouseIsDown: false,
        vatIndex: 0,
        mouseDownX: 0
    }

    mouseDownHandler = (e,index) => {
      let mouseIsDown = true;
      let vatIndex = index;
      let mouseDownX = e.pageX;
      console.log("mouseDownHandler: mouseIsDown:"+mouseIsDown+", vatIndex:"+vatIndex+", mouseDownX:"+mouseDownX);
      this.setState({
        mouseIsDown: mouseIsDown,
        vatIndex: vatIndex,
        mouseDownX: mouseDownX
      });
    }

    componentDidMount = () => {
      document.body.addEventListener('mousemove', this.mouseMoveHandler);
    }

    componentWillUnmount = () => {
      document.body.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    
    mouseMoveHandler = () => {

      console.log("mouseMoveHandler");
    }

    renderVats() {
      return (
        <div>
          {
            this.state.vats.map( (val, index) => {return (
              <HorizontalSliderVatPanel 
                vat={this.state.vats[index]}
                index={index}
                mouseDownHandler={this.mouseDownHandler} 
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
