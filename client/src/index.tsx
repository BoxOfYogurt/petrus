import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorProvider } from "./Store/useErrorStore";
import { ListProvider } from "./Store/useListStore";
import { ThemeProvider } from "./Store/useTheme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <ThemeProvider>
          <ListProvider>
            <App />
          </ListProvider>
        </ThemeProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
