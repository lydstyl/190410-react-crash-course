import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Redered");
    const { onAdd, onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onAdd} className="btn btn-secondary btn-sm m-2">
          Add
        </button>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
