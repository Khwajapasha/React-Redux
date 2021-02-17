const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "ADD") {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "SUBS") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};
export default counterReducer;
