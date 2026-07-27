import { Box, Chip, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import skillsData from "../../data/skills";
import SkillCategory from "./SkillCategory";

const featuredStack = ["Java", "Spring Boot", "React.js", "PostgreSQL"];

const Skills = () => {
  const theme = useTheme();

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
                My Technical Skills
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 2, maxWidth: 760, mx: "auto", lineHeight: 1.7 }}
              >
                I enjoy building enterprise applications using modern
                technologies and continuously learning new tools.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent="center"
                sx={{ mt: 3, gap: 1 }}
              >
                {featuredStack.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Stack>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Grid container spacing={3}>
              {skillsData.map((category) => (
                <Grid item xs={12} md={6} key={category.id}>
                  <SkillCategory
                    category={category.category}
                    description={category.description}
                    items={category.items}
                  />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
