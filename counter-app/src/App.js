/*
import './App.css';
import { useState } from 'react';
function App() {
  //let val=0;
  // we use states becoz normal funtion we cannot get proper increment and decrement value so we use states
  let[val,setVal]=useState(10);
  //let val=10
  //function setVal(newVal){
  //val=newVal
  //}
  const handleIncrement=()=>{
    //val=val+1;
    setVal(val+1);
    console.log("Increment button clicked",val);
  };
  const handleDecrement=()=>{
    //val=val-1;
    setVal(val-1);
    console.log("Increment button clicked",val);
  };
  return (
    <div className="App">
      <h1>Learning React</h1>
      <div className="counter">
        <h1>{val}</h1>
        <div className="buttons">
          <button onClick={handleIncrement} className="inc">Increment</button>
          <button onClick={handleDecrement} className="dec">Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App; */

import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
function App() {
  let [val, setVal] = useState(10);
  const handleIncrement = () => {
    setVal(val + 1);
    console.log("Increment button clicked", val);
  };
  const handleDecrement = () => {
    setVal(val - 1);
    console.log("Decrement button clicked", val);
  };
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
    </div>
  );
}
export default App;
