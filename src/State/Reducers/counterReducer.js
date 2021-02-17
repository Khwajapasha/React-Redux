const initialState = {
  counter: 0,
  results: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.incVal };
    case "DECREMENT":
      return { ...state, counter: state.counter + action.decVal };
    case "ADD":
      return { ...state, counter: state.counter + action.addVal };
    case "SUBS":
      return { ...state, counter: state.counter + action.subsVal };
    case "STORE_RESULT":
      return { ...state, counter: state.counter + action.subsVal };
  }
  return state;
};
export default counterReducer;
