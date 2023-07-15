import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let[status,setStatus]=useState(false);
  function handle(){
    setStatus(true)
  }
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={handle}>Click Me</button>
      {
        status&&<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      }
    </div>
  );
}


export default App;
