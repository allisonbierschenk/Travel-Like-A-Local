// package imports
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import styling
import "./App.css";
import MainContainer from "./containers/maincontainer/MainContainer";
// import MainContainer from "./containers/MainContainer";

// component imports
import Layout from "./layout/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";

// function imports
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.goBack();
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/myaccount");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/signin">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
