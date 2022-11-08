import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005891",
      light: "#83a4db",
      lighter: "#b4c6e8",
    },
    secondary: {
      main: "#cfd8dc",
      light: "#eceff1",
      dark: "#b0bec5",
      contrastText: "#2e3039",
    },
    bw: {
      white: "#ffffff",
      black: "#333333",
    },
    background: {
      light: "#ececec",
      dark: "2e3039",
    },
    text: {
      light: "#ececec",
      dark: "#2e3039",
    },
  },
});

export default theme;
