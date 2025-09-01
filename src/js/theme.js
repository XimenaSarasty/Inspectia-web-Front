import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif", 
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, Roboto, Arial, sans-serif", 
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, Roboto, Arial, sans-serif", 
        },
      },
    },
  },
});

export default theme;
