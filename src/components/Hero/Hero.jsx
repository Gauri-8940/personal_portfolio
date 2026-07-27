import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
import Typewriter from "./Typewriter";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const theme = useTheme();

  const typewriterWords = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            mb: 8,
          }}
        >
          {/* Left side - Text content */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,

                "&::before": {
                  content: '""',
                  display: "inline-block",
                  width: "20px",
                  height: "2px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Hello, I'm Gauri
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typewriter
                words={typewriterWords}
                speed={80}
                delayBetweenWords={2000}
              />
            </Box>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 4,
                lineHeight: 1.8,
                maxWidth: "500px",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
              }}
            >
              I build beautiful, responsive web applications with modern
              technologies. Passionate about creating seamless user experiences
              and clean, maintainable code.
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Download />}
                href="/resume.pdf"
                target="_blank"
                sx={{
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
                href="#contact"
              >
                Let's Connect
              </Button>
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={3}>
              <Button
                startIcon={<GitHub />}
                href="https://github.com/Gauri-8940"
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                GitHub
              </Button>

              <Button
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/gaurichavann/"
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>

          {/* Right side - Professional Photo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glowing background circle */}
            <Box
              sx={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                opacity: 0.2,
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            {/* Avatar */}
            <Avatar
              sx={{
                width: 280,
                height: 280,
                backgroundColor: "background.paper",
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 60px ${theme.palette.primary.main}40`,
                zIndex: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                fontSize: "5rem",
              }}
            >
              👩‍💻
            </Avatar>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <ScrollIndicator targetId="about" />
      </Box>
    </Box>
  );
};

export default Hero;
