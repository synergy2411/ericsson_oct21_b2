import React, { useState } from "react";
import AddNew from "./NewNote/AddNew";
import NoteItem from "./NoteItem";

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

  const onSaveNote = (note) => {
    setNotes([note, ...notes])
    // notes.push(note)
    // notes = [note, ...notes];
    // console.log(notes)
  }

  return (
    // React.createElement("div", {className : "container"},
    //     React.createElement("h4", {}, "From JavaScript : Notes Coming soon..."))

    <div className="container">
      <AddNew onSaveNote={onSaveNote}/>
      <br/>
      <hr/>
      <div className="row">
        <NoteItem
          title={notes[0].title}
          amount={notes[0].amount}
          createdAt={notes[0].createdAt}
        />
        <NoteItem
          title={notes[1].title}
          amount={notes[1].amount}
          createdAt={notes[1].createdAt}
        />
        <NoteItem
          title={notes[2].title}
          amount={notes[2].amount}
          createdAt={notes[2].createdAt}
        />
        <NoteItem
          title={notes[3].title}
          amount={notes[3].amount}
          createdAt={notes[3].createdAt}
        />
      </div>
    </div>
  );
}

export default Notes;

// Angular Expression - {{  }}
