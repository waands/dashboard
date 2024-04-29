import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContectProvider } from "./context/ContextProvider";

ReactDOM.render(
  <ContectProvider>
    <App />,
  </ContectProvider>,
  document.getElementById("root")
);
