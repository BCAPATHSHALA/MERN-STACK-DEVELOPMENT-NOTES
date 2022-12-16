import React, { useState } from "react";
import "./app.css";
// import CreateNote from "./components/CreateNote";
// import ListNotes from "./components/ListNotes";
import Topbar from "./appComponent/topbar/Topbar";
import AddItemSection from "./appComponent/AddItemSection/AddItemSection";
// import FieldItemSection from "./appComponent/FieldItemSection/FieldItemSection";

function App() {
  return (
    <div className="app" id="app">
      {/* <CreateNote/>
      <ListNotes/> */}
      <Topbar />
      <div className="section">
        <AddItemSection />
        {/* <FieldItemSection /> */}
      </div>
    </div>
  );
}

export default App;
