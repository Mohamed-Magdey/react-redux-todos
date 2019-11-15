import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const quote = 'https://api.quotable.io/random';

        fetch(quote)
            .then(data => data.json())
            .then(quote => this.setState({quote}));
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
               <div id="quote-box">
                    <div id="text" key={quote._id}>
                        <strong>{quote.content}</strong>
                    </div>
                   <div id="author">{quote.author}</div>
                   <div className="buttons">
                       <a href="https://twitter.com/intent/tweet"
                          id="tweet-quote" rel="noopener noreferrer"
                          target="_blank">
                           <i className="fas fa-camera"></i>
                       </a>
                       <a href="https://www.tumblr.com/login"
                          id="thumblr" rel="noopener noreferrer"
                          target="_blank">
                       </a>
                       <button className="btn btn-primary" id="new-quote" onClick={this.handleClick}>New quote</button>
                   </div>
               </div>

            );


        return (
            <div className="App">
                <div className="container-fluid" id="wrapper">
                    {views}
                </div>
            </div>
        );
    }
}

export default App;
