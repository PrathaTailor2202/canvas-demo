import './App.css';

function App() {
  function draw() {
    var width = document.getElementById("wid").value;
    var height = document.getElementById("hgt").value;
    var color = document.getElementById("color").value;
    updateForm(width, height, color);
  }

  function updateForm(width, height, color) {
    "use strict";

    //Position parameters used for drawing the rectangle
    var x = 50;
    var y = 50;
    var canvas = document.createElement("canvas"); //Create a canvas element

    //Set canvas drawing area width/height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Position canvas
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.zIndex = 100000;

    document.body.appendChild(canvas); //Append canvas to body element
    var context = canvas.getContext("2d");
    //Draw rectangle
    context.rect(x, y, width, height);
    context.fillStyle = `${color}`;
    context.fill();
    // Draw circle
    context.beginPath();
    context.lineWidth = "4";
    context.strokeStyle = "green";
    context.arc(width / 2, height / 2, 50, 0, 2 * Math.PI);
    context.stroke();
  }


  return (
    <div className="App">
      <form id="areaform">
        <label htmlFor="wid">Width:</label>
        <input id="wid" type="number" />&emsp;
        <label htmlFor="hgt">Height:</label>
        <input id="hgt" type="number" />&emsp;
        <label htmlFor="color">Color:</label>
        <input id="color" type="text" />&emsp;
        <button onClick={draw} type="button">Draw Rectangle</button>
      </form>
    </div>
  );
}

export default App;
