import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {this.props.totalCounters}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
