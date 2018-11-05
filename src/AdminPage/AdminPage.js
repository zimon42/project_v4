import React, { Component } from 'react';
import './AdminPage.css';

import Config from '../config';
import $ from 'jquery';

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
        });
    }

    render() {
        return (
            <div className="AdminPagePanel">
                <h2 className="header">Admin-panelen</h2>
                <button onClick={this.clickHistoryHandler}>Visa historik</button>
                <button>Visa statistik</button>
                <button>Tillbaka</button>
                <hr />
                <div className="contentPanel"></div>
            </div>
        );
    }
}

export default AdminPage;