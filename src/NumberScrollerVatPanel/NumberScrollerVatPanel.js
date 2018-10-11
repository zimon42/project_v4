import React, { Component } from 'react';
import NumberScroller from '../NumberScroller/NumberScroller'
import LockSetter from '../LockSetter/LockSetter'
import "./NumberScrollerVatPanel.css";

class NumberScrollerVatPanel extends Component {

    render() {
        return (
            <div>
                <div className="NumberScrollerVatPanelTitle">{this.props.itemName}:</div>
                <NumberScroller />
                <LockSetter />
            </div>
        );
    }
}

export default NumberScrollerVatPanel;
