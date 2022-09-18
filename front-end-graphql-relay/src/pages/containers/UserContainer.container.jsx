import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../contexts/auth/authContext";

const UserContainer = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, removeCookieUser } = authContext;
  console.log(user.firstName);
  return (
    <div>
      User Container {user.lastName} {user.firstName}
      <button onClick={removeCookieUser}>Log out</button>
    </div>
  );
};

export default UserContainer;
