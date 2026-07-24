import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import getTheme from "./theme/theme";
import "./styles/global.css";

const AppWrapper = () => {
  const { mode } = useTheme();
  const theme = getTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  </React.StrictMode>,
);
