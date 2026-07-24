import { Box, keyframes } from "@mui/material";

const float1 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -50px);
  }
  66% {
    transform: translate(-20px, 20px);
  }
`;

const float2 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-40px, 40px);
  }
  66% {
    transform: translate(30px, -30px);
  }
`;

const float3 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(20px, 50px);
  }
  66% {
    transform: translate(-30px, -20px);
  }
`;

const AnimatedBackground = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "background.default",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 184, 217, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 77, 255, 0.15) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      {/* Floating Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(0, 184, 217, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: `${float1} 8s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(124, 77, 255, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: `${float2} 10s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "40%",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(0, 184, 217, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: `${float3} 9s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

export default AnimatedBackground;
