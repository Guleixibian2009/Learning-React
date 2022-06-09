import React from 'react';
import { Remarkable } from 'remarkable'

export class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.md = new Remarkable();
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Hello, **world**!' };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
      return { __html: this.md.render(this.state.value) };
    }
  
    render() {
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <label htmlFor="markdown-content">
            Enter some markdown
          </label>
          <br />
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
            style={{resize: "none", height: "300px", width:"100%"}}
          />
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      );
    }
  }