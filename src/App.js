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
                <button id={this.props.minID} value="-"
                        onClick={this.props.onClick}
                >
                    <i className="fas fa-arrow-down fa-2x"></i>
                </button>
                <div id={this.props.lengthID} className="block">
                    {this.props.length}
                </div>
                <button id={this.props.addID} value="+"
                        onClick={this.props.onClick}
                >
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
            timer: 1500,
            timerState: 'stopped',
            timerType: 'Session',
            intervalID: ''
        };
        this.breakLength = this.breakLength.bind(this);
        this.sessionLength = this.sessionLength.bind(this);
        this.timerControl = this.timerControl.bind(this);
        this.counter = this.counter.bind(this);
        this.clockify = this.clockify.bind(this);
        this.reset = this.reset.bind(this);
    }

    breakLength(e) {
        let sign =  e.currentTarget.value,
            breakLength = this.state.breakLength;

        if (sign === '+' && breakLength !== 60) {
            this.setState({breakLength: ++breakLength});

        } else if (sign === '-' && breakLength !== 1) {
            this.setState({breakLength: --breakLength});
        }
    }

    sessionLength(e) {
        let sign =  e.currentTarget.value,
            sessionLength = this.state.sessionLength;

        if (sign === '+' && sessionLength !== 60) {
            this.setState({
                sessionLength: ++sessionLength,
                timer: sessionLength * 60
            });

        } else if (sign === '-' && sessionLength !== 1) {
            this.setState({
                sessionLength: --sessionLength,
                timer: sessionLength * 60
            });
        }
    }

    timerControl() {
        let control = this.state.timerState === 'stopped' ? (
            this.setState({timerState: 'running'}),
            this.counter()
        ) : (
            this.setState({timerState: 'stopped'}),
                clearInterval(this.state.intervalID)
        )
    }

    counter() {
        this.setState({
            intervalID: setInterval(() => {
                this.setState({timer: this.state.timer - 1});
                let timer = this.state.timer;
                if (timer < 0) {
                    let type = this.state.timerType === 'Session' ? (
                        clearInterval(this.state.intervalID),
                            this.counter(),
                            this.setState({
                                timerType: 'Break',
                                timer: this.state.breakLength * 60
                            })
                    ) : (
                        clearInterval(this.state.intervalID),
                            this.counter(),
                            this.setState({
                                timerType: 'Session',
                                timer: this.state.sessionLength * 60
                            })
                    )
                }
            }, 1000)
        })
    }

    clockify() {
        let minutes = Math.floor(this.state.timer / 60),
            seconds = this.state.timer - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }

    reset() {
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timer: 1500,
            timerState: 'stopped',
            timerType: 'Session',
            intervalID: ''
        });
        clearInterval(this.state.intervalID)
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
                onClick={this.breakLength}
            />
            <SessionControl
                contentID="session-label" minID="session-decrement"
                addID="session-increment" content="Session Length"
                lengthID="session-length" length={this.state.sessionLength}
                onClick={this.sessionLength}
            />
            <div className="timer">
                <div className="timer-wrap">
                    <div id="timer-label">
                        {this.state.timerType}
                    </div>
                    <div id="time-left">
                        {this.clockify()}
                    </div>
                </div>
            </div>
            <div className="timer-control">
                <button id="start_stop"
                        onClick={this.timerControl}
                >
                    <i className="fas fa-play fa-2x"></i>
                    <i className="fas fa-pause fa-2x"></i>
                </button>
                <button id="reset"
                        onClick={this.reset}
                >
                    <i className="fas fa-sync-alt fa-2x"></i>
                </button>
            </div>
        </div>
    );
  }
}

export default Timer;
