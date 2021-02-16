import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorProvider } from "./Store/useErrorStore";
import { ProjectProvider } from "./Store/useProjectStore";
import { ThemeProvider } from "./Store/useTheme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <ThemeProvider>
          <ProjectProvider>
            <App />
          </ProjectProvider>
        </ThemeProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
