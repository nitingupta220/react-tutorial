import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: (this.state.count += 1)
    });
  }

  decrement() {
    this.setState({
      count: (this.state.count -= 1)
    });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="counter-title">Counter</h1>
        <div className="counter-wrapper">
          <h2>{this.state.count}</h2>
          <div className="counter-buttons">
            <button onClick={this.increment.bind(this)}>+</button>
            <button onClick={this.decrement.bind(this)}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
