import { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectData from "../../data/projects";

const Projects = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const searchText = searchTerm.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchText));

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
                Academic & Professional Projects
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
                A curated set of projects that reflect my full stack development
                journey, research, and practical delivery experience.
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{
                mb: 4,
                alignItems: { xs: "stretch", md: "center" },
                justifyContent: "space-between",
              }}
            >
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <Search
                      size={18}
                      style={{ marginRight: 8, opacity: 0.6 }}
                    />
                  ),
                }}
                sx={{ minWidth: { xs: "100%", md: 320 } }}
              />

              <ToggleButtonGroup
                color="primary"
                value={filter}
                exclusive
                onChange={(_, newFilter) => newFilter && setFilter(newFilter)}
                aria-label="project filter"
              >
                <ToggleButton value="All">All</ToggleButton>
                <ToggleButton value="Academic">Academic</ToggleButton>
                <ToggleButton value="Professional">Professional</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </motion.div>

          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div variants={itemVariants}>
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelectedProject}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {filteredProjects.length === 0 && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, textAlign: "center" }}
            >
              No projects match your current search or filter.
            </Typography>
          )}
        </motion.div>
      </Container>

      <ProjectModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Box>
  );
};

export default Projects;
