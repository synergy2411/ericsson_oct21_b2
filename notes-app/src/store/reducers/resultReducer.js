import * as fromActions from "../actions/counterActions";

const initiatState = {
  result: [],
};
function resultReducer(state = initiatState, action) {
  switch (action.type) {
    case fromActions.STORE_RESULT: {
      return {
        ...state,
        result: [action.counter, ...state.result],
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

export default resultReducer;
