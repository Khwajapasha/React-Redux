import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counterDefaultValue} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdditionCounter} />

        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractionCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state====--->>", state);
  return {
    counterDefaultValue: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdditionCounter: () => dispatch({ type: "ADD" }),
    onSubstractionCounter: () => dispatch({ type: "SUBS" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
