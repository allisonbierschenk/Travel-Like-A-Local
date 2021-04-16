import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    success: {
      main: "#103C17",
    },
    primary: {
      main: "#103C17",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.success.main,
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });
  const { email, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
    const { currentUser } = props;
    if (formData === currentUser) {
      console.log(currentUser);
    } else {
      setFormData({
        isError: true,
        errorMsg: "Your Username or Password is incorrect. Try Again",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    if (formData.isError) {
      return (
        <div className="invalid-signin">
          <p>{formData.errorMsg}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Logo />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} theme={theme} color="main">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignIn
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                value={email}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value={password}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              {renderError()}
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Footer />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
