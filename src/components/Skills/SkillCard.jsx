import { Box, Card, CardContent, Chip, Stack, Typography, useTheme } from "@mui/material";
import SkillChip from "./SkillChip";

const SkillCard = ({ title, description, items, featuredCount }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        background:
          theme.palette.mode === "dark"
            ? "rgba(15, 23, 42, 0.7)"
            : "rgba(248, 250, 252, 0.8)",
        backdropFilter: "blur(12px)",
        border:
          theme.palette.mode === "dark"
            ? "1px solid rgba(148, 163, 184, 0.16)"
            : "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 20px 45px rgba(0, 184, 217, 0.16)"
              : "0 20px 45px rgba(0, 184, 217, 0.1)",
        },
      }}
    >
      <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
          sx={{ mb: 1.5 }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
              {description}
            </Typography>
          </Box>
          {featuredCount > 0 && (
            <Chip label={`${featuredCount} core`} size="small" color="primary" variant="outlined" />
          )}
        </Stack>

        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: "auto" }}>
          {items.map((item) => (
            <SkillChip
              key={item.name}
              icon={item.icon}
              label={item.name}
              featured={item.featured}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
