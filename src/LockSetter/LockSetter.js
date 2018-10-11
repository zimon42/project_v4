import React, { Component } from 'react';
import lock_img from './lock.png';
import "./LockSetter.css";

class LockSetter extends Component {
  render() {
    return (
        <div className="LockSetter">
            <img src={lock_img} className="LockSetterImage" />
        </div>
    );
  }
}

export default LockSetter;
