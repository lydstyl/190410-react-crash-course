import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState({ value: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += !this.state.count ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return !count ? "Zero" : count;
  }
}

export default Counter;
