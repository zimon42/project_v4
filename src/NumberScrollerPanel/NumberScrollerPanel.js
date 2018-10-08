import React, { Component } from 'react';
import NumberScroller from '../NumberScroller/NumberScroller';

class NumberScrollerPanel extends Component {
    state = {
        vals:[25,25,25]
    };

    decHandler = (index) => {
        let oldStateCopy = {...this.state};
        oldStateCopy.vals[index]--;
        this.setState(oldStateCopy);
    }

    incHandler = (index) => {
        let oldStateCopy = {...this.state};
        oldStateCopy.vals[index]++;
        this.setState(oldStateCopy);
    }

    renderNumberScroller = (index) => {
        return (
            <NumberScroller 
                val={this.state.vals[index]}
                incHandler={() => this.incHandler(index)}
                decHandler={() => this.decHandler(index)}
            />
        );
    }

    renderNumberScrollers = () => {
        return (
            this.state.vals.map( (val,index) => {
                return this.renderNumberScroller (index);
            })
        );
    }

    render() {
        return (
            <div>
                {this.renderNumberScrollers()}
            </div>
        );
    }
}

export default NumberScrollerPanel;
