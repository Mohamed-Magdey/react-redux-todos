import React, { Component } from 'react';
import './App.css';
import marked from 'marked';


marked.setOptions({
    breaks: true,
});


const Toolbar = ({text}) => {
    return (
        <div className="toolbar">
            {text}
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editor: placeholder,
        }
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup = this.rawMarkup.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    rawMarkup() {
        let rawMarkup = marked(this.state.editor);
        return { __html: rawMarkup };
    }

  render() {
    return (
        <div className="App">
            <div className="editor">
                <Toolbar text="Editor" />
                <textarea name="editor" id="editor"
                          cols="50" rows="10" type="text"
                          onChange={this.handleChange}
                          value={this.state.editor}
                ></textarea>
            </div>
            <div className="preview">
                <Toolbar text="Preview" />
                <div id="preview" className="wrap"
                     dangerouslySetInnerHTML={this.rawMarkup()}>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

const placeholder =
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
