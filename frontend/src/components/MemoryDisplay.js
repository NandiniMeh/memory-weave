import { Typography, Box, Paper, Divider, Slide } from "@mui/material";

export default function MemoryDisplay({ result }) {
  if (!result) return null;

  return (
    <Slide direction="up" in timeout={700}>
      <Box
        component={Paper}
        elevation={0}
        sx={{
          mt: 6,
          px: 4,
          py: 3,
          borderRadius: 6,
          background: "linear-gradient(to top right, #f7f2ff, #ece9fa)",
          border: "1px solid rgba(180, 160, 255, 0.3)",
          boxShadow: "0 10px 30px rgba(140, 120, 200, 0.15)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#5e4b8b", textShadow: "0 1px 1px #fff" }}
        >
          📝 Reconstructed Memory
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.75,
            fontSize: "1.05rem",
            color: "#3a2e5c",
            letterSpacing: "0.25px",
          }}
        >
          {result}
        </Typography>
      </Box>
    </Slide>
  );
}
