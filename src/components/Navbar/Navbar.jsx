import { useState, useEffect } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  styled,
  Button,
  IconButton,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AnimatedLogo from "../Common/AnimatedLogo";
import ThemeToggle from "../ThemeToggle";
import NavLink from "./NavLink";
import MobileDrawer from "./MobileDrawer";
import navigation from "../../constants/navigation";

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(15, 23, 42, 0.7)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom:
    theme.palette.mode === "dark"
      ? "1px solid rgba(148, 163, 184, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.3)"
      : "0 8px 32px rgba(0, 0, 0, 0.1)",
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  marginLeft: "2rem",

  "@media (max-width: 968px)": {
    display: "none",
  },
}));

const Navbar = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.path);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i].replace("#", "");
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlassAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5, gap: 2 }}>
            <AnimatedLogo />

            {!isMobile && (
              <NavLinks>
                {navigation.map((item) => (
                  <NavLink
                    key={item.id}
                    href={item.path}
                    isActive={activeLink === item.path}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </NavLinks>
            )}

            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              {!isMobile && (
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href="/resume.pdf"
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Resume
                </Button>
              )}

              <ThemeToggle />

              {isMobile && (
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={() => setMobileOpen(true)}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </GlassAppBar>

      {isMobile && (
        <MobileDrawer
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          activeLink={activeLink}
        />
      )}
    </>
  );
};

export default Navbar;
