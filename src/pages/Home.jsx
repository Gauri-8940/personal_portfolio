import { Box } from "@mui/material";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Achievement from "../components/Achievement/Achievement";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievement />
      <Education />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
