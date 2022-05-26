import App from "./App";
import GlobalStyles from "./theme/global";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
