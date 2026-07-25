import { Box, Container, Typography, Grid, Card, CardContent, Chip, useTheme, Stack } from "@mui/material";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "SeerAgro",
    description:
      "Backend modules for crop, plantation, fertilizer, and pest management using Spring Boot and PostgreSQL.",
    tech: ["Spring Boot", "PostgreSQL", "Swagger"],
  },
  {
    id: 2,
    title: "CISAAM",
    description:
      "Frontend and backend integration work for client-specific features using React.js and Spring Boot.",
    tech: ["React.js", "Spring Boot", "Axios"],
  },
  {
    id: 3,
    title: "QMS",
    description:
      "Designed dynamic forms and API integration workflows with React and Spring Boot.",
    tech: ["React.js", "Spring Boot", "PostgreSQL"],
  },
];

const Projects = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="projects"
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
                Projects
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
                A few professional and academic projects that demonstrate my
                full stack experience.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {projectData.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(30, 41, 59, 0.6)"
                          : "rgba(248, 250, 252, 0.6)",
                      backdropFilter: "blur(10px)",
                      border:
                        theme.palette.mode === "dark"
                          ? "1px solid rgba(148, 163, 184, 0.1)"
                          : "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" spacing={1}>
                        {project.tech.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
