import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const theme = useTheme();

  const topSkills = [
    "Java",
    "Spring Boot",
    "React.js",
    "PostgreSQL",
    "RESTful APIs",
    "Material UI",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 8 },
        borderBottom:
          theme.palette.mode === "dark"
            ? "1px solid rgba(148, 163, 184, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "60px",
                    height: "4px",
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                  },
                }}
              >
                About Me
              </Typography>
            </Box>
          </motion.div>

          {/* Content Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start",
            }}
          >
            {/* Left side - Avatar and Title */}
            <motion.div variants={itemVariants}>
              <Stack
                sx={{
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: "background.paper",
                    border: `3px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 0 40px ${theme.palette.primary.main}40`,
                    fontSize: "4rem",
                  }}
                >
                  👩‍💻
                </Avatar>

                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h5" fontWeight={700}>
                    Gauri Chavan
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary.main"
                    sx={{ fontWeight: 600, mt: 0.5 }}
                  >
                    Java Full Stack Developer
                  </Typography>
                </Box>
              </Stack>
            </motion.div>

            {/* Right side - About text and skills */}
            <Stack spacing={4}>
              {/* About Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: "1.05rem",
                  }}
                >
                  Java Full Stack Developer with 1.4+ years of professional
                  experience in designing and developing enterprise web
                  applications using Java, Spring Boot, React.js, PostgreSQL,
                  and RESTful APIs. Experienced in end-to-end software
                  development including frontend, backend, database design, API
                  integration, and client-specific feature implementation.
                  Strong foundation in Object-Oriented Programming (OOP), Data
                  Structures, SQL, SDLC, Clean Architecture, and problem-solving
                  with hands-on experience in building scalable enterprise
                  applications.
                </Typography>
              </motion.div>

              {/* Key Skills */}
              <motion.div variants={itemVariants}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ mb: 2 }}
                  >
                    Key Technologies
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap>
                    {topSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Chip
                          label={skill}
                          variant="outlined"
                          color="primary"
                          sx={{
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",

                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "background.default",
                              transform: "translateY(-2px)",
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
