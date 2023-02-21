import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./auth/AuthProvider";
import { deepOrange, grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[500],
    },
    divider: deepOrange[700],
    background: {
      default: "#121212",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
