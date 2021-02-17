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
        <button onClick={this.props.onStoreResult}>Store Count</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterDefaultValue: state.counter,
    storeDefaultValue: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT", incVal: 2 }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT", decVal: 2 }),
    onAdditionCounter: () => dispatch({ type: "ADD", addVal: 5 }),
    onSubstractionCounter: () => dispatch({ type: "SUBS", subsVal: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
