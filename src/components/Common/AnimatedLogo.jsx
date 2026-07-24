import { Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const AnimatedLogo = () => {
  return (
    <Box
      sx={{
        animation: `${float} 3s ease-in-out infinite`,
      }}
    >
      <Typography variant="h5" fontWeight={700} color="primary">
        Gauri.
      </Typography>
    </Box>
  );
};

export default AnimatedLogo;
