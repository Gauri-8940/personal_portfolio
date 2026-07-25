import { Box, Container, Typography, Stack, Button, TextField, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        borderBottom:
          theme.palette.mode === "dark"
            ? "1px solid rgba(148, 163, 184, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "60px",
                    height: "4px",
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                  },
                }}
              >
                Contact
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
                Let's connect and build something great together.
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ textTransform: "none", py: 1.5 }}
              >
                Send Message
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
