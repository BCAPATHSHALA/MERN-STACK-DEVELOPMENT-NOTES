import React from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import CreateNote from "./notes/CreateNote";
import ListNotes from "./notes/ListNotes";

function App() {
  return (
    <div>
      <Child1/>
      <Child2/>
      <CreateNote />
      <ListNotes />
    </div>
  );
}

export default App;
