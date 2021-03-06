import AddNoteForm from "./AddNoteForm";
import { v4 } from 'uuid';
import './AddNew.css';


const AddNew = (props) => {

    const onAddNewNote = (title, amount, date) => {
        let note = {
            id : v4(),
            title,
            amount,
            createdAt : new Date(date)
        }
        props.onSaveNote(note);
        props.onToggleForm()
    }

    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-center">Add New Item Form</h5>
                    </div>
                    <div className="card-body">
                        {/* AddItemForm should present here.. */}
                        <AddNoteForm onAddNewNote = {onAddNewNote} onToggleForm={props.onToggleForm} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNew;