import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://arianagailaart.com/" target="_blank" rel="noreferrer">
          Ariana Gaila
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/arianagaila/react-weather-app-ariana"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}
