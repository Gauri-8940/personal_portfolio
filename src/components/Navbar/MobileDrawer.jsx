import {
  Drawer,
  Box,
  Typography,
  Link,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import navigation from "../../constants/navigation";
import ThemeToggle from "../ThemeToggle";

const MobileDrawer = ({ open, onClose, activeLink }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 280,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
          Menu
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1} sx={{ flex: 1 }}>
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={onClose}
              sx={{
                textDecoration: "none",
                color:
                  activeLink === item.path ? "primary.main" : "text.primary",
                fontWeight: activeLink === item.path ? 600 : 500,
                py: 1,
                px: 2,
                borderRadius: 1,
                transition: "all 0.3s ease",
                backgroundColor:
                  activeLink === item.path
                    ? "rgba(0, 184, 217, 0.1)"
                    : "transparent",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "rgba(0, 184, 217, 0.1)",
                },
              }}
            >
              {item.title}
            </Link>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1 }}
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
          <Box display="flex" justifyContent="center">
            <ThemeToggle />
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
