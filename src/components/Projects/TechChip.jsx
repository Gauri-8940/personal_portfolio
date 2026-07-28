import { Chip } from "@mui/material";

const TechChip = ({ label }) => {
  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      color="primary"
      sx={{
        height: "28px",
        fontSize: "0.75rem",
        fontWeight: 600,
        borderRadius: "999px",
      }}
    />
  );
};

export default TechChip;
