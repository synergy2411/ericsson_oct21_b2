import { Fragment } from "react";
import { connect } from "react-redux";
import CounterButton from "./CounterButton";
import CounterResult from "./CounterResult";

const Counter = (props) => {
  return (
    <Fragment>
      <p className="display-4 text-center">Counter : {props.counter}</p>
      <hr />
      <CounterButton />
      <br />
      <br />
      <CounterResult />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// connect(mapStateToProps, mapDispatchToProps)(Counter)

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(Counter);

// function connect(mapStateToProps, mapDispatchToProps){
//     return function(ReactComponent){

//     }
// }
