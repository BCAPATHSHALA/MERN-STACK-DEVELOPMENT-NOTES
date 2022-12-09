import React, { useState } from "react";
import File2 from "./File2";

function File1() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  function updateInputText(event) {
    setInputText(event.target.value);
  }
  function updateNotes() {
    // const newNotesArray = [...notes, inputText];
    // setNotes(newNotesArray);
    setNotes((oldData) => {
      return [...oldData, inputText];
    });
    setInputText("");
  }

  function deleteItems(id) {
    // console.log("Deleted");
    setNotes((oldData) => {
      return oldData.filter((arrElement, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="inner-box">
      <div className="in1">
        <input value={inputText} type="text" onChange={updateInputText} />
        <button onClick={updateNotes}><i class="fa-solid fa-square-plus"></i></button>
      </div>
      <div className="in2">
        <ul className="gridBox">
          {notes.map((element, index) => {
            return (
              <>
                <File2
                  anyData={element}
                  key={index}
                  id={index}
                  onSelectFun={deleteItems}
                />
              </>
            );
          })}
        </ul>
        <h1 className="Heading"><i class="fa-brands fa-react"></i>To Do List Application<i class="fa-brands fa-react"></i></h1>
      </div>
    </div>
  );
}

export default File1;
