import * as fromActions from "../actions/counterActions";

const initiatState = {
  counter: 0,
  result: [],
};
function reducerFn(state = initiatState, action) {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case fromActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case fromActions.ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case fromActions.SUBTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    case fromActions.STORE_RESULT: {
      return {
        ...state,
        result: [state.counter, ...state.result],
      };
    }
    case fromActions.DELETE_RESULT: {
        const duplicateResult = state.result.slice(0);
        const theResultArray = duplicateResult.filter((value, index )=> index !== action.index)
      return {
        ...state,
        result: [...theResultArray],
      };
    }

    default:
      return state;
  }
}

export default reducerFn;
