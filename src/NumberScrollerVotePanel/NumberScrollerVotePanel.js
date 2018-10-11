import React, { Component } from 'react';
import NumberScrollerVatPanel from '../NumberScrollerVatPanel/NumberScrollerVatPanel';

class NumberScrollerVotePanel extends Component {

  state = {
      vats: [
        {title: "Coffe", val: 25, isLocked: false},
        {title: "Rejuvelac", val: 25, isLocked: false},
        {title: "Coca Cola", val: 25, isLocked: false}
      ]
  }

  renderVatPanels = () => {
    return (
        <div>
            <NumberScrollerVatPanel itemName={this.state.vats[0].title} />
            <NumberScrollerVatPanel itemName={this.state.vats[1].title} />
            <NumberScrollerVatPanel itemName={this.state.vats[2].title} />        
        </div>
    );
  }


  render() {
    return (
      <div>
          {this.renderVatPanels()}
      </div>
    );
  }
}

export default NumberScrollerVotePanel;
