import React, { Component } from 'react';
import './NumberScroller.css';

class NumberScroller extends Component {
  render() {
    return (
        <div className="ns_panel">
            <button onClick={this.props.decHandler}>&lt;</button>
            <input type="text" value={this.props.val} className="ns_text"/>
            <button onClick={this.props.incHandler}>&gt;</button>
        </div>
    );
  }
}

export default NumberScroller;
