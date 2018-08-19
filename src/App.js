import React from "react";
import ReactDOM from "react-dom";

import "./style/style.scss";

function App() {
  return <span>Hi There</span>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
