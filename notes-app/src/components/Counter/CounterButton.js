import { connect } from "react-redux";
import * as fromAction from '../../store/actions/counterActions';

const CounterButton = props => {
    return (
        <div className="text-center">
            <div className="btn-group">
                <button className="btn btn-primary btn-sm" onClick={props.onIncrease}>Increase</button>
                <button className="btn btn-success btn-sm" onClick={props.onDecrease}>Decrease</button>
                <button className="btn btn-info btn-sm" onClick={() => props.onAddCounter(10)}>Add (10)</button>
                <button className="btn btn-warning btn-sm" onClick={() => props.onSubtractCounter(5)}>Subtract (10)</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrease : () => dispatch({type : fromAction.INCREMENT}),
        onDecrease : () => dispatch({type : fromAction.DECREMENT}),
        onAddCounter : value => dispatch({type : fromAction.ADD_COUNTER, value}),
        // onSubtractCounter : (value) => dispatch(fromAction.onSubtractCounter(value))
        onSubtractCounter : (value) => dispatch(fromAction.subtractWithDelay(value))
    }
}

export default connect(null, mapDispatchToProps)(CounterButton);