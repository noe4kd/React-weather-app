import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/noe4kd/React-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>{" "}
          coded by{" "}
          <a
            href="https://portfolioproject-noe4kd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Noelia 4kd{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
