import React, { Component } from 'react';
import './App.css';

const data = [
    {
        id: "clear",
        value: "AC"
    },
    {
        id: "divide",
        value: "/"
    },
    {
        id: "multiply",
        value: "X"
    },
    {
        id: "seven",
        value: "7"
    },
    {
        id: "eight",
        value: "8"
    },
    {
        id: "nine",
        value: "9"
    },
    {
        id: "subtract",
        value: "-"
    },
    {
        id: "four",
        value: "4"
    },
    {
        id: "five",
        value: "5"
    },
    {
        id: "six",
        value: "6"
    },
    {
        id: "add",
        value: "+"
    },
    {
        id: "one",
        value: "1"
    },
    {
        id: "two",
        value: "2",
    },
    {
        id: "three",
        value: "3"
    },
    {
        id: "zero",
        value: "0"
    },
    {
        id: "decimal",
        value: "."
    },
    {
        id: "equals",
        value: "="
    }
];

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data
        }
    }

    render() {
        let button = data.map(val => (
            <button key={val.id} id={val.id}
                    value={val.value}
            >
                {val.value}
            </button>
        ));
        return button
    }
}

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="formulaScreen"></div>
            <div className="outputScreen" id="display">0</div>
            <div>
                <Button/>
            </div>
        </div>
    );
  }
}

export default App;
