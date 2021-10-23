import { connect } from "react-redux";
import * as fromActions from "../../store/actions/counterActions";
import "./CounterResult.css";

const CounterResult = (props) => {
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <button
          className="btn btn-dark btn-block btn-sm"
          onClick={() => props.onStoreResult(props.counter)}
        >
          Store Result
        </button>
        <br />
        <ul className="list-group">
          {props.result.map((r, index) => {
            return (
              <li
                onClick={() => props.onDeleteResult(index)}
                className="list-group-item text-center my-list-item"
                key={index}
              >
                {" "}
                {r}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.res.result,
    counter : state.ctr.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (counter) => dispatch({ type: fromActions.STORE_RESULT, counter }),
    onDeleteResult: (index) => dispatch(fromActions.onDeleteResult(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterResult);
