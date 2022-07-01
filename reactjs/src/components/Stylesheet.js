import React from "react";
import "./myStyles.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import Popup from "./Popup";
import { useState } from "react";
import { TextField } from "@mui/material";

var x;
var y;
var x_index = new Array();
var y_index = new Array();
const data = [
  { name: "0", uv: 0 },
  { name: "1", uv: 0 },
  { name: "2", uv: 0 },
  { name: "3", uv: 0 },
  { name: "4", uv: 0 },
  { name: "5", uv: 0 },
  { name: "6", uv: 0 },
  { name: "7", uv: 0 },
  { name: "8", uv: 0 },
  { name: "9", uv: 0 },
  { name: "10", uv: 0 },
];

function solvePoint() {}

function showPoints(){
  const newDiv = document.createElement('div')
  const newContent = document.createTextNode("Hi");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementsByClassName("button1");
  document.body.insertBefore(newDiv, currentDiv);
}
function removePoint() {
  for (let i = 0; i < x_index.length; i++) {

  }
}
function addPointGraph() {}
function collectPoint() {
  if (
    document.getElementById("x").value.length !== 0 &&
    document.getElementById("x").value.length !== undefined &&
    document.getElementById("x").value <= 10 &&
    document.getElementById("y").value.length !== 0 &&
    document.getElementById("y").value.length !== undefined &&
    document.getElementById("y").value <= 10
  ) {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    x_index.push(x);
    y_index.push(y);
    const form = document.getElementById("x_value");
    form.reset();
    const form2 = document.getElementById("y_value");
    form2.reset();
  }
}

function Stylesheet() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [remButtonPopup, setRemButtonPopup] = useState(false);

  return (
    <div className="App">
      <h1 className="rectangle"></h1>
      <h2 className="primary"> Linear Regression Calculator </h2>
      <button1 className="button1">Solve</button1>
      <button2 className="button2" onClick={() => setButtonPopup(true)}>
        Add Point
      </button2>
      <button3 className="button3" onClick={() => setRemButtonPopup(true)}>
        Remove Point
      </button3>

      <LineChart
        width={1860}
        height={710}
        data={data}
        margin={{ top: 0, right: 5, bottom: 50, left: 0 }}
      >
        <Line type="monotone" datakey="pv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey={"name"} />
        <YAxis ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} domain={[0, 10]} />
      </LineChart>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="popup_text1">Add new point</h3>
        <h4 className="popup_text2">X-value</h4>
        <form id="x_value" noValidate autoComplete="off">
          <TextField id="x"></TextField>
        </form>
        <h5 className="popup_text3">Y-value</h5>
        <form id="y_value" noValidate autoComplete="off">
          <TextField id="y"></TextField>
        </form>
        <button className="submit-btn" onClick={collectPoint}>
          Submit
        </button>
      </Popup>

      <Popup trigger={remButtonPopup} id = 'remove' setTrigger={setRemButtonPopup}>
        <button className="show-btn" onClick={showPoints}>Show points</button>
      </Popup>
    </div>
  );
}
export default Stylesheet;
