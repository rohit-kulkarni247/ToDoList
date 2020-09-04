import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-warning m-2">{this.formatcount()}</span>

        <button
          onClick={this.handleIncrement}
          type="button"
          className="btn btn-secondary btn-md m-3"
        >
          Increment
        </button>
        <br></br>
      </React.Fragment>
    );
  }
  formatcount() {
    const { value } = this.state;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
