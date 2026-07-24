import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import MouseGlow from "../components/Background/MouseGlow";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <MouseGlow />

      <AnimatedBackground>
        <Box
          component="main"
          sx={{
            flex: 1,
          }}
        >
          {children}
        </Box>
      </AnimatedBackground>

      <Footer />
    </Box>
  );
};

export default MainLayout;
