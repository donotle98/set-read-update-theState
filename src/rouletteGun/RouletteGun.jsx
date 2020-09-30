import React, { Component } from "react";

class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8,
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };
  componentWillUnmount() {
    clearInterval(this.timeOut);
  }
  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    }, 2000);
  };
  displayResults() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!!";
    } else {
      return "you're safe!";
    }
  }
  render() {
    return (
      <div>
        <p>{this.displayResults()}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
