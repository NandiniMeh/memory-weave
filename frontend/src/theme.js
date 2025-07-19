import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#b388ff" },
    secondary: { main: "#f3e5f5" },
    background: { default: "transparent" },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      fontSize: "2.8rem",
    },
    h5: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
