import {
  Home as HomeIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function MUIShowcase() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
    }, 2000);
  };

  const handleSnackbarClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Home", "Settings", "Info"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <SettingsIcon />
              ) : (
                <InfoIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleHighlight = () => {
    const row = document.getElementById("John");
    if (row) {
      row.style.backgroundColor = "cyan";
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React with state being served by Go + HTMX
            </Typography>
            <FormControlLabel
              control={
                <Switch checked={darkMode} onChange={handleThemeToggle} />
              }
              label="Dark Mode"
            />
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawerContent}
        </Drawer>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the MUI Showcase
          </Typography>
          <Card sx={{ maxWidth: 400, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Sample Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Receive newsletter"
                  sx={{ my: 2 }}
                />
                <CardActions>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={handleHighlight}
                  >
                    Highlight John
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : null}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
