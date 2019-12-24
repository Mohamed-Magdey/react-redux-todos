import React, { Component } from 'react';
import './App.css';

class SessionControl extends Component {
    contentID;
    minID;
    addID;
    lengthID;
    render() {
        return (
            <div className="session-control block">
                <div id={this.props.contentID}>
                    {this.props.content}
                </div>
                <button id={this.props.minID}>
                    <i className="fas fa-arrow-down fa-2x"></i>
                </button>
                <div id={this.props.lengthID} className="block">
                    {this.props.length}
                </div>
                <button id={this.props.addID}>
                    <i className="fas fa-arrow-up fa-2x"></i>
                </button>
            </div>
        );
    }
}

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            breakLength: 5,
            sessionLength: 25,
            timer: 1500
        }
        this.clockify = this.clockify.bind(this);
    }

    clockify() {
        let minutes = Math.floor(this.state.timer / 60),
            seconds = this.state.timer - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }

  render() {
    return (
        <div className="App">
            <div className="main-title">
                Pomodoro Clock
            </div>
            <SessionControl
                contentID="break-label" minID="break-decrement"
                addID="break-increment" content="Break Length"
                lengthID="break-length" length={this.state.breakLength}
            />
            <SessionControl
                contentID="session-label" minID="session-decrement"
                addID="session-increment" content="Session Length"
                lengthID="session-length" length={this.state.sessionLength}
            />
            <div className="timer">
                <div className="timer-wrap">
                    <div id="timer-label">Session</div>
                    <div id="time-left">
                        {this.clockify()}
                    </div>
                </div>
            </div>
            <div className="timer-control">
                <button id="start_stop">
                    <i className="fas fa-play fa-2x"></i>
                    <i className="fas fa-pause fa-2x"></i>
                </button>
                <button id="reset">
                    <i className="fas fa-sync-alt fa-2x"></i>
                </button>
            </div>
        </div>
    );
  }
}

export default Timer;
