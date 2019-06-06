import React, { Component } from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Timer;
