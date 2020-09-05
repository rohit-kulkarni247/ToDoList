import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-warning m-4">{this.formatcount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          type="button"
          className="btn btn-secondary btn-md m-3"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  formatcount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
