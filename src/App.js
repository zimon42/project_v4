import React, { Component } from 'react';
import logo from './logo.svg';
import NumberScrollerPanel from './NumberScrollerPanel/NumberScrollerPanel';
import './App.css';

const VOTE_PANEL_TYPE = "number_scroller_panel"

class App extends Component {

  getVotePanelElement = () => {
    if (VOTE_PANEL_TYPE == "number_scroller_panel") {
        return <NumberScrollerPanel />;
    } else {
        return <NumberScrollerPanel />;
    }
  }    
  
  render() {
    return (
      <div>
        Helo
        {this.getVotePanelElement()}
      </div>
    );
  }
}

export default App;
