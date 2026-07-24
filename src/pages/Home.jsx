import { Box, Typography } from "@mui/material";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <Box p={5}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h3">Welcome to Gauri Portfolio 🚀</Typography>
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default Home;
