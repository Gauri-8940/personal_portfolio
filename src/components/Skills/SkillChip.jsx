import { Chip, styled } from "@mui/material";

const StyledSkillChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "featured",
})(({ theme, featured }) => ({
  borderRadius: 999,
  borderWidth: featured ? 1.5 : 1,
  borderStyle: "solid",
  borderColor: featured ? theme.palette.primary.main : theme.palette.divider,
  color: featured ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: featured
    ? theme.palette.mode === "dark"
      ? "rgba(0, 184, 217, 0.15)"
      : "rgba(0, 184, 217, 0.12)"
    : theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.04)"
      : "rgba(15, 23, 42, 0.03)",
  fontWeight: featured ? 700 : 600,
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
  cursor: "default",
  "& .MuiChip-icon": {
    color: featured ? theme.palette.primary.main : theme.palette.text.secondary,
  },
  "&:hover": {
    transform: "translateY(-2px) scale(1.02)",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.1)",
  },
}));

const SkillChip = ({ icon: Icon, label, featured }) => {
  return (
    <StyledSkillChip
      icon={Icon ? <Icon size={16} /> : undefined}
      label={label}
      variant={featured ? "filled" : "outlined"}
      featured={featured ? 1 : 0}
      sx={{
        fontSize: "0.9rem",
        px: 1,
        py: 0.5,
      }}
    />
  );
};

export default SkillChip;
