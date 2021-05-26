import * as React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

ReactDOM.render(<App />, document.querySelector("#app"));

