import React, { Component } from "react";

class Overview extends Component {
  constructor() {
    super();

    this.state = {
      inputVal: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = data.get("input");
    if (value === "") return;

    this.setState({
      inputVal: [...this.state.inputVal, value],
    });
    e.target.reset();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
          <label htmlFor="input">Input</label>
          <input id="input" name="input" type="text"></input>
          <button>Submit</button>
        </form>
        <div> {` ${this.state.inputVal}`}</div>
      </>
    );
  }
}

export default Overview;
