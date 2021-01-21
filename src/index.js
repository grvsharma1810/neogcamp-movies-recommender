import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

document.body.style = "background: #efefef;";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
