import {
  Box,
  Container,
  Typography,
  Stack,
  useTheme,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../data/experience";

const Experience = () => {
  const theme = useTheme();

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
      id="experience"
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
                Professional Experience
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                1.4+ years of hands-on experience building scalable enterprise
                applications
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline */}
          <Box sx={{ position: "relative" }}>
            {/* Vertical Line for Desktop */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "12px", md: "50%" },
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(148, 163, 184, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                display: { xs: "block", md: "none" },
              }}
            />

            {/* Experience Cards */}
            <Stack spacing={3}>
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
                    {/* Desktop Timeline Dot */}
                    <Grid
                      item
                      xs={0}
                      md={5}
                      sx={{ display: { xs: "none", md: "flex" }, alignItems: "stretch" }}
                    >
                      {index % 2 === 0 ? (
                        <Box sx={{ textAlign: "right", pr: 4, display: "flex", width: "100%", justifyContent: "flex-end" }}>
                          <Box sx={{ width: "100%" }}>
                            <ExperienceCard experience={exp} />
                          </Box>
                        </Box>
                      ) : (
                        <Box sx={{ display: { xs: "none", md: "block" } }} />
                      )}
                    </Grid>

                    {/* Timeline Center Dot */}
                    <Grid
                      item
                      xs={1}
                      md={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        pt: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          border: `3px solid ${theme.palette.background.default}`,
                          position: "relative",
                          zIndex: 2,
                        }}
                      />
                    </Grid>

                    {/* Card for Right Side */}
                    <Grid item xs={11} md={5} sx={{ display: "flex", alignItems: "stretch" }}>
                      {index % 2 === 1 ? (
                        <Box sx={{ pl: 4, width: "100%" }}>
                          <Box sx={{ width: "100%" }}>
                            <ExperienceCard experience={exp} />
                          </Box>
                        </Box>
                      ) : (
                        // On mobile (xs) we still want to show the card
                        // but hide it on md when it's already rendered on the left.
                        <Box sx={{ pl: 4, display: { xs: "block", md: "none" }, width: "100%" }}>
                          <Box sx={{ width: "100%" }}>
                            <ExperienceCard experience={exp} />
                          </Box>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
