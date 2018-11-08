import React, { Component } from 'react';
import './AdminPage.css';

import Config from '../config';
import $ from 'jquery';

import HistoryList from './HistoryList';

class AdminPage extends Component {

    state = {
        adminPageState: "showing_nothing"
    }

    clickHistoryHandler = () => {
        // alert("clickHistoryHandler");
        this.loadHistory();
    }

    loadHistory() {
        $.post(
            Config.BACKEND_ENTRY_FILE,
        { 
            action:"get_history"
        },
        (data, status) => {
            console.log("Get history: " + data + "\nStatus: " + status);
            this.setState({
                adminPageState: "showing_history",
                historyData: JSON.parse(data)
            });
        });
    }

    render() {

        let content = "Content";

        if (this.state.adminPageState == "showing_history") {
            content = <HistoryList historyData={this.state.historyData} />
        }

        return (
            <div className="AdminPagePanel">
                <h2 className="header">Admin-panelen</h2>
                <button onClick={this.clickHistoryHandler}>Visa historik</button>
                <button>Visa statistik</button>
                <button>Tillbaka</button>
                <hr />
                <div className="contentPanel">{content}</div>
            </div>
        );
    }
}

export default AdminPage;