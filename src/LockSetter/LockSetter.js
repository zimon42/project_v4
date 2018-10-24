import React, { Component } from 'react';
import lock_img from './lock.png';
import "./LockSetter.css";

class LockSetter extends Component {
  render() {

    let lockImgClasses = "LockSetterImage ";
    lockImgClasses += this.props.isLocked ?
    "LockSetterIsLockedTrue" :
    "LockSetterIsLockedFalse";

    return (
        <div className="LockSetter">
            <img 
                src={lock_img} 
                className={lockImgClasses} 
                onClick={() => {return this.props.lockClickHandler(this.props.index)}} />
        </div>
    );
  }
}

export default LockSetter;
