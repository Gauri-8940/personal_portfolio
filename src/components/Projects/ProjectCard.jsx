import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import TechChip from "./TechChip";

const ProjectCard = ({ project, onViewDetails }) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            theme.palette.mode === "dark"
              ? "rgba(30, 41, 59, 0.7)"
              : "rgba(248, 250, 252, 0.75)",
          backdropFilter: "blur(12px)",
          border:
            theme.palette.mode === "dark"
              ? "1px solid rgba(148, 163, 184, 0.16)"
              : "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              color="primary.main"
              fontWeight={700}
            >
              {project.category}
            </Typography>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
              {project.title}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {project.tech.slice(0, 4).map((item) => (
              <TechChip key={item} label={item} />
            ))}
            {project.tech.length > 4 && (
              <TechChip label={`+${project.tech.length - 4}`} />
            )}
          </Stack>

          <Box sx={{ mt: "auto", pt: 1 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              {project.github && (
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  size="small"
                  startIcon={<ExternalLink size={16} />}
                  sx={{ flex: 1 }}
                >
                  GitHub
                </Button>
              )}
              <Button
                variant="contained"
                size="small"
                startIcon={<Eye size={16} />}
                onClick={() => onViewDetails(project)}
                sx={{ flex: 1 }}
              >
                Details
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
