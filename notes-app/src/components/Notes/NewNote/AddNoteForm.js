import { Fragment, useState } from 'react';
import { Prompt } from 'react-router-dom';

const AddNoteForm = (props) => {

    const [enteredTitle, setEnteredTitle ] = useState('')
    const [enteredAmount, setEnteredAmount ] = useState('')
    const [enteredDate, setEnteredDate ]= useState('')
    const [isStartEntering, setIsStartEntering] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        // console.log(enteredTitle, enteredAmount, enteredDate);
        props.onAddNewNote(enteredTitle, enteredAmount, enteredDate)
    }

    const formFocusHandler = () => {
      console.log("Focused now.")
      setIsStartEntering(true)
    }
  return (
    <Fragment>
      <Prompt when={isStartEntering} message={() => "Are you sure to leave this page?"}/>
    <form onSubmit={submitHandler} onFocus={formFocusHandler}>
      {/* Title : string*/}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input name="title" type="text" className="form-control" onChange={titleChangeHandler} />
      </div>
      {/* Amount  : number*/}
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          onChange={amountChangeHandler}
        />
      </div>
      {/* CreatedAt : Date */}
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          min="2019-10-10"
          max="2022-12-31"
          className="form-control"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <input
              type="submit"
              value="Add Note"
              className="btn btn-primary btn-block btn-sm"
            />
          </div>
          <div className="col-6">
            <input
              type="button"
              value="Cancel"
              className="btn btn-warning btn-block btn-sm"
              onClick={() => props.onToggleForm()}
            />
          </div>
        </div>
      </div>
    </form>
    </Fragment>
  );
};

export default AddNoteForm;
