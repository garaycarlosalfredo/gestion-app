import React, { useContext, useEffect } from "react";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AuthContext from "../contexts/auth/authContext";

import WestContainer from "./containers/WestContainer.container";
import UserContainer from "./containers/UserContainer.container";

const HomeContainer = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  //const navigate = useNavigate();

  useEffect(() => {
    // console.log("Home isAuthenticated = ", isAuthenticated);
    // if (isAuthenticated) {
    //   navigate("user");
    // }
  }, []);

  return (
    <div>
      <p> Autenticado = {isAuthenticated ? "true" : "false"}</p>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              isAuthenticated ? <Navigate to="/user" /> : <WestContainer />
            }
          />
          <Route
            path="/user"
            element={
              !isAuthenticated ? <Navigate to="/home" /> : <UserContainer />
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

HomeContainer.propTypes = {};

export default HomeContainer;
