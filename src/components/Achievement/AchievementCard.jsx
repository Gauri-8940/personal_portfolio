import { Card, Box, Typography, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AchievementCard = ({ achievement }) => {
  const theme = useTheme();
  const [inView, setInView] = useState(false);

  // Extract number from value (e.g., "1.4+" -> 1.4)
  const numericValue = parseFloat(achievement.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: "center",
          height: "100%",
          background:
            theme.palette.mode === "dark"
              ? "rgba(30, 41, 59, 0.6)"
              : "rgba(248, 250, 252, 0.6)",
          backdropFilter: "blur(10px)",
          border:
            theme.palette.mode === "dark"
              ? "1px solid rgba(0, 184, 217, 0.2)"
              : "1px solid rgba(0, 184, 217, 0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.05)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 20px 40px rgba(0, 184, 217, 0.2)"
                : "0 20px 40px rgba(0, 184, 217, 0.1)",
          },
        }}
      >
        <Stack spacing={2}>
          {/* Icon */}
          <Typography
            sx={{
              fontSize: "3rem",
              display: "block",
            }}
          >
            {achievement.icon}
          </Typography>

          {/* Counter Value */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #00B8D9 0%, #7C4DFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              {inView ? (
                <>
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2}
                    decimals={1}
                    decimal="."
                  />
                  {achievement.value.includes("+") ? "+" : ""}
                </>
              ) : (
                achievement.value
              )}
            </Typography>
          </Box>

          {/* Label */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            {achievement.label}
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            {achievement.description}
          </Typography>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default AchievementCard;
      <Card
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: "center",
          height: "100%",
          background:
            theme.palette.mode === "dark"
              ? "rgba(30, 41, 59, 0.6)"
              : "rgba(248, 250, 252, 0.6)",
          backdropFilter: "blur(10px)",
          border:
            theme.palette.mode === "dark"
              ? "1px solid rgba(0, 184, 217, 0.2)"
              : "1px solid rgba(0, 184, 217, 0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.05)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 20px 40px rgba(0, 184, 217, 0.2)"
                : "0 20px 40px rgba(0, 184, 217, 0.1)",
          },
        }}
      >
        <Stack spacing={2}>
          {/* Icon */}
          <Typography
            sx={{
              fontSize: "3rem",
              display: "block",
            }}
          >
            {achievement.icon}
          </Typography>

          {/* Counter Value */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #00B8D9 0%, #7C4DFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              {inView ? (
                <>
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2}
                    decimals={1}
                    decimal="."
                  />
                  {achievement.value.includes("+") ? "+" : ""}
                </>
              ) : (
                achievement.value
              )}
            </Typography>
          </Box>

          {/* Label */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            {achievement.label}
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            {achievement.description}
          </Typography>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default AchievementCard;
