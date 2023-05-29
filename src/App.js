import { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
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
    const { input } = this.state.inputVal;

    return (
      <>
        <form onSubmit={this.handleClick}>
          <label htmlFor="input">Input</label>
          <input id="input" name="input" type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <Overview input={this.state.inputVal} />
      </>
    );
  }
}

export default App;
