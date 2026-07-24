import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode: mode,

      primary: {
        main: "#00B8D9",
      },

      secondary: {
        main: "#7C4DFF",
      },

      background: {
        default: isDark ? "#0F172A" : "#FFFFFF",
        paper: isDark ? "#1E293B" : "#F8FAFC",
      },

      text: {
        primary: isDark ? "#FFFFFF" : "#0F172A",
        secondary: isDark ? "#94A3B8" : "#64748B",
      },

      divider: isDark ? "#334155" : "#E2E8F0",
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
};

export default getTheme;
