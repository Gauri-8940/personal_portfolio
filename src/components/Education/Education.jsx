import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  Grid,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import educationData from "../../data/education";

const Education = () => {
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
      id="education"
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
                Education
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                Academic foundation in Computer Science and professional
                development
              </Typography>
            </Box>
          </motion.div>

          {/* Education Timeline */}
          <Box sx={{ position: "relative" }}>
            {/* Vertical Line */}
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
              }}
            />

            {/* Education Cards */}
            <Stack spacing={4}>
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
                    {/* Timeline Dot */}
                    <Grid
                      item
                      xs={1}
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

                    {/* Card */}
                    <Grid item xs={11} md={5}>
                      <Card
                        sx={{
                          p: { xs: 2.5, md: 3 },
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
                          transition: "all 0.3s ease",

                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow:
                              theme.palette.mode === "dark"
                                ? "0 20px 40px rgba(0, 184, 217, 0.15)"
                                : "0 20px 40px rgba(0, 184, 217, 0.1)",
                          },
                        }}
                      >
                        <Stack spacing={2}>
                          {/* Header with Icon */}
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ alignItems: "start" }}
                          >
                            <GraduationCap
                              size={24}
                              style={{
                                color: "var(--primary-color)",
                                flexShrink: 0,
                              }}
                            />
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" fontWeight={700}>
                                {edu.degree}
                              </Typography>
                            </Box>
                          </Stack>

                          {/* Institution */}
                          <Box>
                            <Typography
                              variant="body2"
                              color="primary.main"
                              fontWeight={600}
                              sx={{ mb: 0.5 }}
                            >
                              {edu.institution}
                            </Typography>

                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{ alignItems: "center" }}
                            >
                              <MapPin size={14} style={{ opacity: 0.6 }} />
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {edu.location}
                              </Typography>
                            </Stack>
                          </Box>

                          {/* Duration */}
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ alignItems: "center" }}
                          >
                            <Chip
                              label={edu.duration}
                              size="small"
                              variant="outlined"
                              color="primary"
                            />
                            <Chip
                              label={`CGPA: ${edu.cgpa}`}
                              size="small"
                              variant="filled"
                              color="primary"
                            />
                          </Stack>

                          {/* Description */}
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.6 }}
                          >
                            {edu.description}
                          </Typography>
                        </Stack>
                      </Card>
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

export default Education;
