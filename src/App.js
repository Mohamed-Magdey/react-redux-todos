import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Quote = ({quote,handleClick,color,bool}) => (

    <div id="quote-box" className="px-4">
        <CSSTransition
            in={bool}
            timeout={500} classNames="my-node"
        >
            <div id="text" key={quote._id} className={`h4 text-center text-wrap`}
                 style={{color}}
            >
                <i className="fas fa-quote-left"></i>  {quote.content}
            </div>
        </CSSTransition>
        <div id="author"
             style={{color}}
             className="text-right pt-3"
        >
            - {quote.author}
        </div>
        <div id="buttons" className="clearfix pt-4">

            <a href="https://twitter.com/intent/tweet"
               id="tweet-quote" rel="noopener noreferrer"
               style={{backgroundColor: color}}
               target="_blank" className="btn btn-primary text-white mr-2"
            >
                <i className="fab fa-twitter"></i>
            </a>

            <a href="https://www.tumblr.com/login"
               id="thumblr" rel="noopener noreferrer"
               style={{backgroundColor: color}}
               target="_blank" className="btn btn-primary text-white"
            >
                <i className="fab fa-tumblr"></i>
            </a>

            <button className={`float-right btn text-white float-right`}
                    id="new-quote"
                    style={{backgroundColor: color}}
                    onClick={handleClick}
            >
                New quote
            </button>
        </div>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {},
            colors: ['#16a085', '#27ae60', '#2c3e50',
                    '#f39c12', '#e74c3c', '#9b59b6',
                    '#FB6964', '#342224', "#472E32",
                    "#BDBB99", "#77B1A9", "#73A857"],
            bool: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const quote = 'https://api.quotable.io/random';
        const {colors} = this.state;
        let color = colors[Math.floor(Math.random() * colors.length)];

        fetch(quote)
            .then(data => data.json())
            .then(quote => this.setState({quote,color}));

        document.body.style.backgroundColor = color;
    }

    handleClick() {
        this.fetchData();
    }

    componentDidMount() {
        this.fetchData();
    }

        render() {

        return (
            <div className="App d-flex flex-column justify-content-center align-items-center">
                <div id="wrapper" className="jumbotron bg-white">
                    <Quote color={this.state.color}
                           quote={this.state.quote}
                           bool={this.state.bool}
                           handleClick={this.handleClick}
                    />
                </div>
                <div className="footer">
                    by <a href="https://codepen.io/Mohamed-Magdey"
                          target="_blank"
                          rel="noopener noreferrer"
                >
                            mohamed
                        </a>
                </div>
            </div>
        );
    }
}

export default App;
