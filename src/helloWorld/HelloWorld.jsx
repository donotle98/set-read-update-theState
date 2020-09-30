import React, { Component } from "react";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { who: "world" };
  }
  handleButtonClick = (ev) => {
    this.setState({
      who: `${ev.currentTarget.value}`,
    });
  };
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button value="world!" onClick={this.handleButtonClick}>
          World
        </button>
        <button value="friend!" onClick={this.handleButtonClick}>
          Friend
        </button>
        <button value="React!" onClick={this.handleButtonClick}>
          React
        </button>
      </div>
    );
  }
}

export default HelloWorld;
