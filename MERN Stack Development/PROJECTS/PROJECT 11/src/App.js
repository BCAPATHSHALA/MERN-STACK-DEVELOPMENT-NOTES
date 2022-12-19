import React from "react";
import "./app.css";
import Topbar from "./appComponent/topbar/Topbar";
import AddItemSection from "./appComponent/AddItemSection/AddItemSection";

function App() {
  return (
    <div className="app" id="app">
      <Topbar />
      <div className="section">
        <AddItemSection />
      </div>
    </div>
  );
}

export default App;
