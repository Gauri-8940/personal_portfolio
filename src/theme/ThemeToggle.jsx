import { Box, styled } from "@mui/material";
import { WbSunny, Brightness4 } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const ToggleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "dark" ? "#334155" : "#e2e8f0",
  borderRadius: 24,
  padding: "4px",
  width: 60,
  height: 32,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  position: "relative",
}));

const ToggleThumb = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDark",
})(({ theme, isDark }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: isDark ? "#1976d2" : "#ffffff",
  position: "absolute",
  left: isDark ? "28px" : "2px",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "relative",
  zIndex: 1,
}));

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === "dark";

  return (
    <ToggleContainer onClick={toggleTheme}>
      <IconBox>
        {isDark ? (
          <Brightness4 sx={{ fontSize: 18, color: "#1976d2", ml: 1 }} />
        ) : (
          <WbSunny sx={{ fontSize: 18, color: "#fbbf24", ml: 1 }} />
        )}
      </IconBox>
      <ToggleThumb isDark={isDark}>
        {isDark ? (
          <Brightness4 sx={{ fontSize: 16, color: "#ffffff" }} />
        ) : (
          <WbSunny sx={{ fontSize: 16, color: "#fbbf24" }} />
        )}
      </ToggleThumb>
    </ToggleContainer>
  );
};

export default ThemeToggle;
