import * as actionTypes from "../Actions/counterAction";
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // another way of immuting state
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - action.decVal };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.addVal };
    case actionTypes.SUBS:
      return {
        ...state,
        counter: state.counter - action.subsVal,
      };
  }
  return state;
};
export default counterReducer;
