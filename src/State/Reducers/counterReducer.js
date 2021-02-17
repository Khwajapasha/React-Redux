const initialState = {
  counter: 0,
  results: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.incVal };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.decVal };
    case "ADD":
      return { ...state, counter: state.counter + action.addVal };
    case "SUBS":
      return { ...state, counter: state.counter - action.subsVal };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT":
      // const id = 0;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};
export default counterReducer;
