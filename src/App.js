import { StyledEngineProvider } from "@mui/material";
import React from "react";
import AppRoutes from "./features/Routes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles'
import theme from "./config/theme";

function App() {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

export default App;
