import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Buildings from "./components/buildings";
import Plogo from "./images/p-picture.png";
import ResourcesBar from "./components/resourcesBar";

function App() {
  return (
    <div className = "App container">
      <div className = "row">
        <img src={Plogo} alt="logo" width="75" height="75"/>
        <h1 className = "center">Parking Buddy</h1>
      </div>
      <div className = "row top-buffer">
        <Buildings />
      </div>
      <ResourcesBar/>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
