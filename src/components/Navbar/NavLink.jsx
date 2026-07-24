import { Link as MuiLink, styled } from "@mui/material";

const StyledNavLink = styled(MuiLink)(({ theme, isactive }) => ({
  textDecoration: "none",
  color: isactive ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: isactive ? 600 : 500,
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  padding: "0.5rem 0",

  "&::after": {
    content: '""',
    position: "absolute",
    width: isactive ? "100%" : "0",
    height: "2px",
    bottom: "-2px",
    left: "0",
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease",
  },

  "&:hover": {
    color: theme.palette.primary.main,

    "&::after": {
      width: "100%",
    },
  },
}));

const NavLink = ({ href, children, isActive }) => {
  return (
    <StyledNavLink href={href} isactive={isActive ? 1 : 0}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
