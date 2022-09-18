import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../contexts/auth/authContext";
import ProfecionalContainer from "./ProfecionalContainer.container";
import PacientContainer from "./PacientContainer.container";

const UserContainer = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, removeCookieUser } = authContext;
  console.log(user.firstName);
  return (
    <div>
      User Container {user.lastName} {user.firstName}
      <div>
        <button onClick={removeCookieUser}>Log out</button>
      </div>
      <ProfecionalContainer></ProfecionalContainer>
      <PacientContainer></PacientContainer>
    </div>
  );
};

export default UserContainer;