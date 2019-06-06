import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h5>Toggle Button</h5>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default Toggle;
