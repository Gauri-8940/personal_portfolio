import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop:
          theme.palette.mode === "dark"
            ? "1px solid rgba(148, 163, 184, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(15, 23, 42, 0.5)"
            : "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        mt: 8,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* About Section */}
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Gauri Chavan
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Full-stack developer passionate about creating beautiful,
              functional web applications. Let's build something amazing
              together.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "background.paper",
                  color: "primary.main",
                  transition: "all 0.3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: theme.palette.background.default,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHub />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "background.paper",
                  color: "primary.main",
                  transition: "all 0.3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: theme.palette.background.default,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedIn />
              </Link>

              <Link
                href="mailto:gauri@example.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "background.paper",
                  color: "primary.main",
                  transition: "all 0.3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: theme.palette.background.default,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Mail />
              </Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link
                href="#home"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                About
              </Link>
              <Link
                href="#projects"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Resources */}
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/resume.pdf"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Resume
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Blog
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Privacy Policy
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Gauri Chavan. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed & Built by Gauri with ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
