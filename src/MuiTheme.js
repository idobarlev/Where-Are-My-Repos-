// Components
import { LTR } from "components";

// Constants
import { theme } from "./constants/general/theme";

// MUI
import { createTheme, ThemeProvider } from "@mui/material";

// Theme
const defaultTheme = createTheme(theme);

const MuiThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme || defaultTheme}>
    <LTR>{children}</LTR>
  </ThemeProvider>
);

export default MuiThemeProvider;
