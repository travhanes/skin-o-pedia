import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.css";

function index() {
  return <App />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
