import React, { useState } from "react";
import FilteredYear from "./FilterYear/FilteredYear";
import AddNew from "./NewNote/AddNew";
import NoteItem from "./NoteItem";
import './Notes.css'

const DUMMY_NOTES = [
  {
    id: "n1",
    title: "grocery",
    amount: 11.99,
    createdAt: new Date(2020, 10, 12),
  },
  {
    id: "n2",
    title: "shopping",
    amount: 13.99,
    createdAt: new Date(2020, 1, 2),
  },
  {
    id: "n3",
    title: "insurance",
    amount: 1.99,
    createdAt: new Date(2021, 1, 1),
  },
  {
    id: "n4",
    title: "planting",
    amount: 21.9,
    createdAt: new Date(2019, 6, 5),
  },
];

function Notes() {
  
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [showForm, setShowForm ] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2020');

  const onSaveNote = (note) => {
    setNotes([note, ...notes])
  }

  // const duplicateNotes = notes.map(note => {
  //   return <NoteItem key={note.id} title={note.title} amount={note.amount} createdAt={note.createdAt}/> 
  // })

  
  const onToggleForm = () => {
    setShowForm(!showForm);
  }
  
  const onSelectedYear = year => {
    console.log("Selected Year : ", year);
    setSelectedYear(year);
  }
  
  const filteredNotes = notes.filter(note => note.createdAt.getFullYear().toString() === selectedYear)

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-2">
          <button onClick={onToggleForm} className="btn btn-dark btn-block btn-sm">
            { showForm ? 'Hide Form' :  'Show Form'}
            </button>
        </div>
        <div className="col-4">
          <FilteredYear onSelectedYear={onSelectedYear} selectedYear={selectedYear} />
        </div>
      </div>
      {showForm && <div className="backdrop"> </div>}
      {showForm && <AddNew onSaveNote={onSaveNote} onToggleForm={onToggleForm} />}
      <br/>
      <hr/>
      <div className="row the-effect">
        {/* {duplicateNotes} */}
        {filteredNotes.map(note => <NoteItem key={note.id} title={note.title} amount={note.amount} createdAt={note.createdAt}/>)}
      </div>
    </div>
  );
}

export default Notes;

// Angular Expression - {{  }}
