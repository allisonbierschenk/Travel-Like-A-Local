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
import { allUsers } from "../../services/auth";
import { useEffect } from "react";
import Alert from "@material-ui/lab/Alert";

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
    backgroundColor: theme.palette.success.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.success.dark,
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });
  const { username, email, password, passwordConfirmation } = formData;
  const { handleRegister } = props;

  useEffect(() => {
    const fetchUsers = async () => {
      const all = await allUsers();
      setUsers(all);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
    const { currentUser } = props;
    if (formData) {
      console.log(currentUser);
    } else {
      setFormData({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign up error",
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
    } else if (formData.password !== formData.passwordConfirmation) {
      return <p className="invalid-on-signup">Passwords Do Not Match</p>;
    } else if (users.some((user) => user.username === formData.username)) {
      return <p className="invalid-on-signup">Username Already Taken</p>;
    } else if (users.some((user) => user.email === formData.email)) {
      return (
        <div className="email-taken">
          <p className="invalid-on-signup">
            Email Already Associated With Account.
          </p>
        </div>
      );
    } else if (formData.password.length < 6) {
      return (
        <div>
          <br />
          <Alert variant="outlined" severity="warning">
            Password must be at least 6 characters
          </Alert>
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
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignUp
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={username}
                    onChange={handleChange}
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    id="password-confirmation"
                    autoComplete="password-confirmation"
                    value={passwordConfirmation}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              {renderError()}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>

              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Footer />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
