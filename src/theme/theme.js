import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#00B8D9",
    },

    secondary: {
      main: "#7C4DFF",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
