import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorProvider } from "./Store/useErrorStore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
