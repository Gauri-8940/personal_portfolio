import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import achievementData from "../../data/achievements";

const Achievement = () => {
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
      id="achievements"
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
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Achievements & Impact
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: "auto" }}
              >
                Quantifiable results from my professional journey
              </Typography>
            </Box>
          </motion.div>

          {/* Achievement Cards Grid */}
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {achievementData.map((achievement) => (
              <Grid item xs={12} sm={6} md={3} key={achievement.id}>
                <motion.div variants={itemVariants}>
                  <AchievementCard achievement={achievement} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Achievement;
