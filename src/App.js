import React, {Component} from 'react';
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
        value: "x"
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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data,
            display: '',
            numbers: [],
            operations: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let val = e.target.value;

        if (val === 'AC') { // clear
            this.setState({
                display: '',
                numbers: [],
                operations: []
            }, () => {
                document.getElementsByClassName('formulaScreen')[0].innerText = '';
                document.getElementById('display').innerText = '0';
            });
        }

        // add (N) to input
        if ((/[0-9]/).test(val)) {
            this.setState({ display: this.state.display + val}, () => {
                document.getElementById('display').innerText = this.state.display;
            });
        } else if ((/[-x+/]/).test(val)) { // set array of operation
            this.setState({operations: this.state.operations.concat(val)}, ()=> {

                let number = [...this.state.numbers];
                number.push(this.state.display);
                this.setState({numbers: number, display: ''}, ()=> {

                    document.getElementsByClassName('formulaScreen')[0].innerText = val;
                    document.getElementById('display').innerText = val;
                });
            });
        } else if (val ==='=') {
            let number = [...this.state.numbers];

            number.push(this.state.display);
            this.setState({numbers: number}, ()=> {

                let value = this.state.numbers.slice(1);
                let result = +this.state.numbers[0];

                for (let i = 0; i < this.state.operations.length; i++){
                    switch (this.state.operations[i]) {
                        case 'x':
                            result *= +value[i];
                            break;
                        case '/':
                            result /= +value[i];
                            break;
                        case '+':
                            result += +value[i];
                            break;
                        case '-':
                            result -= +value[i];
                            break;
                        default:
                            alert("Error!!!");
                    }
                }
                this.setState({display: result});
            })
        }
    }

    componentDidMount(){
        document.getElementById('display').innerText = '0';
    }

  render() {
        const button = this.state.data.map(val => (
                        <button key={val.id} id={val.id}
                                value={val.value}
                                onClick={this.handleClick}
                        >
                            {val.value}
                        </button>
        ));

    return (
        <div className="App">
            <div className="formulaScreen">{this.state.display}</div>
            <div className="outputScreen" id="display">{this.state.display}</div>
            <div>
                {button}
            </div>
        </div>
    );
  }
}

export default App;
