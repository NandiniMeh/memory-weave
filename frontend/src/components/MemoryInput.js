import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function MemoryInput({ setResult, setLoading, loading }) {
  const [fragments, setFragments] = useState("");
  const [tone, setTone] = useState("dreamlike");
  const [pov, setPov] = useState("first-person");
  const [style, setStyle] = useState("poetic");

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    const body = {
      fragments: fragments.split("\n").filter((f) => f.trim()),
      tone,
      pov,
      style,
    };

    try {
      const res = await fetch("http://localhost:5000/generate-memory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setResult(data.memory);
    } catch {
      setResult("⚠️ Failed to generate memory.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Type a few fragments of a memory — like scents, moments, emotions.
      </Typography>

      <TextField
        label="Memory Fragments"
        multiline
        minRows={4}
        value={fragments}
        onChange={(e) => setFragments(e.target.value)}
        fullWidth
        placeholder="- lavender\n- bicycle\n- sunset breeze"
        variant="outlined"
        sx={{
          mb: 3,
          backgroundColor: "#f9f5ff",
          borderRadius: 2,
        }}
      />

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          [
            "Tone",
            tone,
            setTone,
            ["dreamlike", "nightmarish", "romantic", "anxious"],
          ],
          ["Point of View", pov, setPov, ["first-person", "third-person"]],
          ["Style", style, setStyle, ["poetic", "cinematic", "diary"]],
        ].map(([label, value, setValue, options], i) => (
          <Grid item xs={12} sm={4} key={label}>
            <FormControl fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                label={label}
              >
                {options.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={handleGenerate}
        disabled={loading}
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          py: 1.3,
          letterSpacing: "0.5px",
          borderRadius: 3,
          boxShadow: "0 6px 20px rgba(180, 140, 255, 0.3)",
          background: "linear-gradient(to right, #a98fff, #bfa4f5)",
          "&:hover": {
            background: "linear-gradient(to right, #8d6ef7, #b194ec)",
            boxShadow: "0 8px 24px rgba(160, 130, 255, 0.4)",
          },
        }}
      >
        {loading ? "Weaving Memory..." : "✨ Weave Memory"}
      </Button>
    </Box>
  );
}
