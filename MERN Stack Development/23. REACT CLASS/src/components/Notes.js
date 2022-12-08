import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");

  function updateCurNote(event) {
    setCurNote(event.target.value);
  }

  function addNote(event) {
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }

  return (
    <>
      <input type="text" onChange={updateCurNote} />
      <button onClick={addNote}>Submit</button>
      <ul>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Notes;
