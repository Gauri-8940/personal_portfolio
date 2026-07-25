import { Box, Container, Typography, Stack, Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useTheme();

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "PostgreSQL",
    "RESTful APIs",
    "Material UI",
    "Git",
    "Axios",
    "JDBC",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
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
      id="skills"
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
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6, textAlign: "center" }}>
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
                Skills
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
                Technical strengths and tools I rely on to build modern web
                applications.
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" flexWrap="wrap" spacing={2}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    py: 1,
                    px: 2,
                  }}
                />
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
