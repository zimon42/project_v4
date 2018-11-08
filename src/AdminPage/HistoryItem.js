import React, { Component } from 'react';
import Diagram from "./Diagram";

class HistoryItem extends Component {

    render() {
        return (
            <div>
                <Diagram diagramData={this.props.itemData.vote_vats} /><br />
                Röst {this.props.itemIndex+1} av {this.props.itemTot} <br /> 
                {this.props.itemData.date}
            </div>
        );
    }

}

export default HistoryItem;
