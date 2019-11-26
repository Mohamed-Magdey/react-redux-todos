import React, { Component } from 'react';
import './App.css';


const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class DrumPad extends Component {
    drumKeyTrigger;
    drumId;
    drumUrl;
    drumKeyCode;
    constructor(props) {
        super(props);

        this.handleButton = this.handleButton.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    handleButton(e) {
        if (e.keyCode === this.props.drumKeyCode) {
            this.playSound();
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleButton);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleButton);
    }

    playSound() {
        const sound = document.getElementById(this.props.drumKeyTrigger);
        const text = document.getElementById("display");
        text.innerText = this.props.drumId;
        sound.play();
    }

    render() {
        return (
            <div id={this.props.drumId} className="drum-pad"
                 onClick={this.playSound}
                 onKeyPress={this.handleButton}
            >
                <audio id={this.props.drumKeyTrigger}
                       className="clip"
                       src={this.props.drumUrl}
                >
                </audio>
                {this.props.drumKeyTrigger}
            </div>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankOne: bankOne
        }
    }

  render() {
        const data = this.state.bankOne.map((val) => {
            return (
                <DrumPad drumId={val.id}
                         drumUrl={val.url}
                         drumKeyCode={val.keyCode}
                         drumKeyTrigger={val.keyTrigger}
                         key={val.id}
                />
            )});
    return (
        <div className="App container" id="drum-machine">
            <div id="display"></div>
            {data}
        </div>
    );
  }
}

export default App;
