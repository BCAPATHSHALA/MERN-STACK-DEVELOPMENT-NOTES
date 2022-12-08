// import Counter from "./components/Counter";
// import Fruits from "./components/Fruits";
// import Notes from "./components/Notes";
import { useState } from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import CustomEvent from "./components/CustomEvent";
import LogicalAndOperator from "./components/LogicalAndOperator";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadDataFun(){
    console.log("Start uploading the data....")
  }

  return (
    <div>
      {/* <Counter/> */}
      {/* <Fruits/> */}
      {/* <Notes/> */}
      {/* <p>Inside the parent: {countInParent}</p> */}
      {/* <Child1 onCountUpdate={updateCountInParent} /> */}
      {/* <Child2 anyData={countInParent}/> */}
      {/* <CustomEvent uploadData={uploadDataFun}/> */}
      <LogicalAndOperator/>
    </div>
  );
}

export default App;
