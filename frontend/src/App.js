import { ThemeProvider, Container, Typography, Paper } from "@mui/material";
import MemoryInput from "./components/MemoryInput";
import MemoryDisplay from "./components/MemoryDisplay";
import Background from "./components/Background";
import theme from "./theme";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Container maxWidth="sm" style={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 6,
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.7)",
            mt: 6,
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            🌙 Memory Weave
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            sx={{ mb: 3 }}
          >
            Weave vivid memories from scattered fragments
          </Typography>
          <MemoryInput
            setResult={setResult}
            setLoading={setLoading}
            loading={loading}
          />
          <MemoryDisplay result={result} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
