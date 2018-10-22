import React, { Component } from 'react';
import HorizontalSliderVatPanel from '../HorizontalSliderVatPanel/HorizontalSliderVatPanel';
import Config from '../config';

class HorizontalSliderVotePanel extends Component {

    state = {
        vats: [
          {title: "Läsk", val: 25, img:"soda2.jpg", isLocked: false},
          {title: "Kaffe", val: 25, img:"coffee.png", isLocked: false},
          {title: "Mjölk", val: 25, img:"milk.jpg", isLocked: false},
          /*
          {title: "Choklad", val: 25, img:"hot_chokolate.jpg", isLocked: false},
          {title: "Rejuvelac", val: 25, img:"rejuvelac.jpg", isLocked: false},
          {title: "Svart te", val: 25, img:"black_tea.png", isLocked: false},
          {title: "Grönt te", val: 25, img:"green_tea.jpg", isLocked: false},
          {title: "Roibos", val: 25, img:"roibos.jpg", isLocked: false},
          {title: "Buljong", val: 25, img:"broth.jpg", isLocked: false},
          {title: "Mineralvatten", val: 25, img:"mineral_water2.png", isLocked: false},
          */
        ],
        mouseIsDown: false,
        vatIndex: 0,
        mouseDownX: 0,
        oldVals: null
    }

    mouseDownHandler = (e,index) => {
      let mouseIsDown = true;
      let vatIndex = index;
      let mouseDownX = e.pageX;

      // Set old vals
      let oldVals = new Array(this.state.vats.length);
      for (let i=0; i<oldVals.length; i++) {
        oldVals[i] = this.state.vats[i].val;
      }
      
      console.log("mouseDownHandler: mouseIsDown:"+mouseIsDown+", vatIndex:"+vatIndex+", mouseDownX:"+mouseDownX);
      this.setState({
        mouseIsDown: mouseIsDown,
        vatIndex: vatIndex,
        mouseDownX: mouseDownX,
        oldVals: oldVals
      });
    }

    componentDidMount = () => {
      document.body.addEventListener('mousemove', this.mouseMoveHandler);
      document.body.addEventListener('mouseup', this.mouseUpHandler);
    }

    componentWillUnmount = () => {
      document.body.removeEventListener('mousemove', this.mouseMoveHandler);
      document.body.removeEventListener('mouseup', this.mouseUpHandler);
    }
    
    mouseMoveHandler = (e) => {
      // console.log("mouseMoveHandler");
      if (this.state.mouseIsDown) {
        const mouseMoveX = e.pageX;
        // console.log("mouseMoveHandler, x:"+mouseMoveX);
        const dX = mouseMoveX - this.state.mouseDownX;
        // console.log("mouseMoveHandler, dx:"+dx);
        let dVal = ( dX / (Config.SLIDER_WIDTH - Config.SLIDER_BUTTON_WIDTH)) * 100;

        // Muse use "let" because we might be altering
        // the value if button passes endpoints
        let oldVal = this.state.oldVals[this.state.vatIndex];
        let newVal = oldVal + dVal;

        // console.log("mouseMoveHandeler, newVal:"+newVal);

        // Handle too little to spare
        let toSpare = this.calcOthersToSpare(this.state, dVal);  
        if (dVal <= 0 && toSpare < Math.abs(dVal)) {
          dVal = -1*toSpare;
        }
        if (dVal > 0 && toSpare < Math.abs(dVal)) {
          dVal = toSpare;
        }

        // Handle endpoints:
        if (newVal < 0) {
          newVal = 0;
          dVal = newVal - oldVal;
        }
        if (newVal > 100) {
          newVal = 100;
          dVal = newVal - oldVal;
        }

        // Update state of current vat
        let oldStateCopy = {...this.state};
        let vat = oldStateCopy.vats[this.state.vatIndex];
        vat.val = newVal;

        // Handle other sliders
        this.handleOtherSliders(oldStateCopy, dVal);

        // Set state
        this.setState(oldStateCopy);
    
      }
    }

    handleOtherSliders(oldStateCopy, dVal) {
      let toSpare = this.calcOthersToSpare(oldStateCopy, dVal);
      console.log("toSpare:"+toSpare);
    }

    calcOthersToSpare(oldStateCopy, dVal) {
      let toSpare = 0;
      if (dVal >= 0) {
        for (let i=0; i<oldStateCopy.vats.length; i++) {
          if (i == this.state.vatIndex) {
            continue;
          }
          toSpare += oldStateCopy.oldVals[i];
        }
        return toSpare;
      }
      if (dVal < 0) {
        for (let i=0; i<oldStateCopy.vats.length; i++) {
          if (i == this.state.vatIndex) {
            continue;
          }
          toSpare += (100 - oldStateCopy.oldVals[i]);
        }
        return toSpare;
      }
    }

    mouseUpHandler = (e) => {
      console.log("mouseUpHandler");
      this.setState({
        mouseIsDown: false
      });
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
