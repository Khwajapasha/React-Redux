import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../State/Actions/counterAction";

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
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.ctr.storedResult.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterDefaultValue: state.counter,
    storedResult: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () =>
      dispatch({ type: actionTypes.INCREMENT, incVal: 2 }),
    onDecrementCounter: () =>
      dispatch({ type: actionTypes.DECREMENT, decVal: 2 }),
    onAdditionCounter: () => dispatch({ type: actionTypes.ADD, addVal: 5 }),
    onSubstractionCounter: () =>
      dispatch({ type: actionTypes.SUBS, subsVal: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, results: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
