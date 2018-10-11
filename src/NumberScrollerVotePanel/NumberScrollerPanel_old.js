import React, { Component } from 'react';
import NumberScroller from '../NumberScroller/NumberScroller';

class NumberScrollerPanel extends Component {
    state = {
        vals:[25,25,25]
    };

    decIncHandler = (op, index) => {
        let oldStateCopy = {...this.state};

        const byHowMuchCurrent = this.calcByHowMuchCurrent(op);
        oldStateCopy.vals[index] += byHowMuchCurrent;

        const byHowMuchOthers = this.calcByHowMuchOthers(oldStateCopy.vals, index, op);
        this.updateOthers(oldStateCopy.vals, index, byHowMuchOthers);

        this.setState(oldStateCopy);
    }

    calcByHowMuchCurrent = (op) => {        
        if (op == "inc") {
            return 1;
        }
        else if (op == "dec") {
            return -1;
        }
        else {
            return 1;
        }
    }

    calcByHowMuchOthers = (arr, index, op) => {        
        let byHowMuch = 1/this.countOthers(arr, index);
        if (op == "inc") {
            return -1*byHowMuch;
        }
        else if (op == "dec") {
            return byHowMuch;
        }
        else {
            return byHowMuch;
        }
    }

    countOthers = (arr, index) => {
        let count = 0;
        for (let i=0; i<arr.length; i++) {
            if (i != index) {
                count++;
            }
        }
        return count;
    }

    updateOthers = (arr, index, byHowMuch) => {
        for (let i=0; i<arr.length; i++) {
            if (i != index) {
                arr[i] += byHowMuch;
            }
        }
    }

    renderNumberScroller = (index) => {
        return (
            <NumberScroller 
                val={this.state.vals[index]}
                incHandler={() => this.decIncHandler("inc", index)}
                decHandler={() => this.decIncHandler("dec", index)}
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
