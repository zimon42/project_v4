import React, { Component } from 'react';
import logo from './logo.svg';
import NumberScrollerVotePanel from './NumberScrollerVotePanel/NumberScrollerVotePanel';
import './App.css';

const VOTE_PANEL_TYPE = "number_scroller_vote_panel"

class App extends Component {

  getVotePanelElement = () => {
    if (VOTE_PANEL_TYPE == "number_scroller_vote_panel") {
        return <NumberScrollerVotePanel />;
    } else {
        return <NumberScrollerVotePanel />;
    }
  }    
  
  render() {
    return (
      <div>
        {this.getVotePanelElement()}
      </div>
    );
  }
}

export default App;
