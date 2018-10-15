import React, { Component } from 'react';
import "./HorizontalSliderVatPanel.css";

class HorizontalSliderVatPanel extends Component {

    render() {
        return (
            <div>
                <div className="HorizontalSliderVatPanelLeftSide">
                    <img 
                        src={ require("../images/"+this.props.vat.img)}
                    ></img><br />
                    <div>{this.props.vat.title}</div>
                </div>
            </div>
        );
    }
}

export default HorizontalSliderVatPanel;
