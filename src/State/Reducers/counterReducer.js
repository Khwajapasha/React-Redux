const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + action.incVal,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - action.decVal,
    };
  }
  if (action.type === "ADD") {
    return {
      counter: state.counter + action.addVal,
    };
  }
  if (action.type === "SUBS") {
    return {
      counter: state.counter - action.subsVal,
    };
  }
  return state;
};
export default counterReducer;
