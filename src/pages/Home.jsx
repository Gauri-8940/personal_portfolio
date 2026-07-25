import { Box } from "@mui/material";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Achievement from "../components/Achievement/Achievement";
import Education from "../components/Education/Education";

const Home = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Experience />
      <Achievement />
      <Education />
    </Box>
  );
};

export default Home;
