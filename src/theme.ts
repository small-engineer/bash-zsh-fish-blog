import { createTheme } from "@suid/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#22d3ee",
      light: "#67e8f9",
      dark: "#0ea5e9",
    },
    secondary: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#7c3aed",
    },
    background: {
      default: "#050b1a",
      paper: "rgba(7, 14, 35, 0.82)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "rgba(226, 232, 240, 0.75)",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily:
      "'InterVariable', 'Inter', 'Noto Sans JP', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      letterSpacing: "-0.035em",
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.06rem",
      lineHeight: 1.68,
    },
    body2: {
      fontSize: "0.98rem",
      lineHeight: 1.56,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.04em",
    },
  },
})

export default theme
