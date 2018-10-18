import React, { Component } from 'react';
import "./HorizontalSliderVatPanel.css";
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';
import LockSetter from '../LockSetter/LockSetter';

class HorizontalSliderVatPanel extends Component {

    render() {
        return (
            <div className="HorizontalSliderVatPanel">
                <img className="HorizontalSliderVatPanelImage"
                    src={ require("../images/"+this.props.vat.img)}
                ></img>
                <div className="HorizontalSliderVatPanelTitle">
                    {this.props.vat.title}
                </div> 
                <HorizontalSlider /> 
                <LockSetter />              
            </div>
        );
    }
}

export default HorizontalSliderVatPanel;
