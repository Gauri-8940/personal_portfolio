import { Card, Box, Typography, Stack, Chip, useTheme } from "@mui/material";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          p: { xs: 2, md: 3 },
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
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            backgroundColor: "primary.main",
          },

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 20px 40px rgba(0, 184, 217, 0.15)"
                : "0 20px 40px rgba(0, 184, 217, 0.1)",
          },
        }}
      >
        {/* Header */}
        <Stack spacing={2}>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mb: 1,
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Briefcase size={20} style={{ color: "var(--primary-color)" }} />
              <Typography variant="h6" fontWeight={700}>
                {experience.role}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color="primary.main"
              fontWeight={600}
              sx={{ mb: 1 }}
            >
              {experience.company}
            </Typography>

            {/* Duration and Location */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack
                direction="row"
                spacing={0.5}
                sx={{ alignItems: "center" }}
              >
                <Calendar size={14} style={{ opacity: 0.6 }} />
                <Typography variant="caption" color="text.secondary">
                  {experience.duration}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={0.5}
                sx={{ alignItems: "center" }}
              >
                <MapPin size={14} style={{ opacity: 0.6 }} />
                <Typography variant="caption" color="text.secondary">
                  {experience.location}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            {experience.description}
          </Typography>

          {/* Key Contributions */}
          {experience.achievements && experience.achievements.length > 0 && (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                sx={{ mt: 2, mb: 1 }}
              >
                Key Contributions
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                {experience.achievements.map((item, idx) => (
                  <Typography
                    key={`${experience.id}-achievement-${idx}`}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6, listStyleType: "disc" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {/* Skills */}
          <Box>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {experience.skills.slice(0, 6).map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{
                    height: "28px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                />
              ))}
              {experience.skills.length > 6 && (
                <Chip
                  label={`+${experience.skills.length - 6} more`}
                  size="small"
                  variant="filled"
                  color="primary"
                  sx={{
                    height: "28px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                />
              )}
            </Stack>
          </Box>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
