import { Box, keyframes } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0.5;
  }
`;

const ScrollIndicator = ({ targetId = "about" }) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      onClick={handleScroll}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        gap: 1,

        "& .scroll-text": {
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "text.secondary",
          transition: "color 0.3s ease",
        },

        "& .scroll-icon": {
          animation: `${bounce} 2s ease-in-out infinite`,
          color: "primary.main",
        },

        "&:hover .scroll-text": {
          color: "primary.main",
        },
      }}
    >
      <span className="scroll-text">Scroll to explore</span>
      <KeyboardArrowDown className="scroll-icon" />
    </Box>
  );
};

export default ScrollIndicator;
