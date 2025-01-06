import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import WizardForm from "./components/Wizard/WizardForm";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: teal[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WizardForm />
    </ThemeProvider>
  );
}

export default App;
