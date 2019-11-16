import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {},
            visible: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const quote = 'https://api.quotable.io/random';

        fetch(quote)
            .then(data => data.json())
            .then(quote => this.setState({quote,visible: !this.state.visible}));
    }

    handleClick() {
        this.fetchData();
    }

    componentDidMount() {
        this.fetchData();
    }

        render() {
        const {quote} = this.state;
           let views =  (
               <div id="quote-box" className="px-4">
                    <div id="text" key={quote._id} className={`h4 text-center text-wrap
                    ${this.state.visible? 'fadeIn': 'fadeOut'}`}>
                        <i className="fas fa-quote-left"></i> {quote.content}
                    </div>
                   <div id="author" className="text-right pt-3">- {quote.author}</div>
                   <div id="buttons" className="clearfix pt-4">

                       <a href="https://twitter.com/intent/tweet"
                          id="tweet-quote" rel="noopener noreferrer"
                          target="_blank" className="btn btn-primary mr-2">
                           <i className="fab fa-twitter"></i>
                       </a>

                       <a href="https://www.tumblr.com/login"
                          id="thumblr" rel="noopener noreferrer"
                          target="_blank" className="btn btn-primary fadeIn">
                           <i className="fab fa-tumblr"></i>
                       </a>

                       <button className={`float-right btn btn-primary float-right`}
                               id="new-quote"
                               onClick={this.handleClick}>
                           New quote
                       </button>
                   </div>
               </div>

            );


        return (
            <div className="App d-flex flex-column justify-content-center align-items-center">
                <div id="wrapper" className="jumbotron bg-white">
                    {views}
                </div>
                <div className="footer">
                    by <a href="https://codepen.io/Mohamed-Magdey">mohamed</a>
                </div>
            </div>
        );
    }
}

export default App;
