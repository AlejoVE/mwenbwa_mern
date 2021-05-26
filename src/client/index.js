import * as React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";

console.log(process.env.REACT_APP_API_URL)


ReactDOM.render(<App />, document.querySelector("#app"));

