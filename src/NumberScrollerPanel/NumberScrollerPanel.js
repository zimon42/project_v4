import React, { Component } from 'react';
import VatPanel from '../VatPanel/VatPanel';

class NumberScrollerPanel extends Component {

  state = {
      vats: [
        {val: 25, isLocked: false},
        {val: 25, isLocked: false},
        {val: 25, isLocked: false}
      ]
  }

  renderVatPanels = () => {
    return (
        <div>
            <VatPanel />
            <VatPanel />
            <VatPanel />        
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

export default NumberScrollerPanel;
