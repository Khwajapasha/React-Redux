import * as actionTypes from "../Actions/counterAction";
const initialState = {
  counter: 0,
  results: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + action.incVal };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - action.decVal };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.addVal };
    case actionTypes.SUBS:
      return {
        ...state,
        counter: state.counter - action.subsVal,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
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
