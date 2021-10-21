import { Fragment, useReducer } from "react";

const initialState = {
  counter: 0,
  result: [],
};
// Pure Function
const reducerFn = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [state.counter, ...state.result],
    };
  }
  return state;
};

const ReducerHook = () => {
  const [state, dispatchFn] = useReducer(reducerFn, initialState);

  const increaseHandler = () => {
    dispatchFn({ type: "INCREMENT" });
  };
  const decreaseHandler = () => {
    dispatchFn({ type: "DECREMENT" });
  };
  const onResultStoreHandler = () => {
    dispatchFn({ type: "STORE_RESULT" });
  };
  return (
    <Fragment>
      <p className="display-4">Counter : {state.counter} </p>
      <button className="btn btn-primary btn-sm" onClick={increaseHandler}>
        Increase
      </button>
      <button className="btn btn-warning btn-sm" onClick={decreaseHandler}>
        Decrease
      </button>
      <hr />
      <button className="btn btn-success btn-sm" onClick={onResultStoreHandler}>
        Store
      </button>
      <br />
      <ul>
        {state.result.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ReducerHook;
