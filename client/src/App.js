import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/maincontainer/MainContainer";
import Layout from "./layout/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";

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
      const currentUser = await verifyUser();
      currentUser ? setCurrentUser(currentUser) : setCurrentUser(null);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setCurrentUser(userData);
      history.goBack();
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = async (formData) => {
    try {
      const userData = await registerUser(formData);
      setCurrentUser(userData);
      history.push("/");
    } catch (error) {
      throw error;
    }
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
          <SignIn handleLogin={handleLogin} currentUser={currentUser} />
        </Route>
        <Route path="/signup">
          <SignUp handleRegister={handleRegister} currentUser={currentUser} />
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
