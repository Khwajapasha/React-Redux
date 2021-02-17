const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};
export default counterReducer;
