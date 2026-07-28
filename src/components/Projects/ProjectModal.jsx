import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Chip,
  Box,
  Divider,
} from "@mui/material";
import { ExternalLink } from "lucide-react";

const ProjectModal = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>{project.title}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={3}>
          <Typography variant="body1" color="text.secondary">
            {project.longDescription || project.description}
          </Typography>

          <Box>
            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
              Technologies
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.tech.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
              Key Features
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
              {project.features?.map((feature) => (
                <Typography
                  key={feature}
                  component="li"
                  variant="body2"
                  color="text.secondary"
                >
                  {feature}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
              Outcome
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.outcome}
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            startIcon={<ExternalLink size={16} />}
            sx={{ mr: 1 }}
          >
            GitHub
          </Button>
        )}
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
