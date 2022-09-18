import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../contexts/auth/authContext";
import FormSignUp from "../../components/forms/FormSignUp.component";
import FormSingIn from "../../components/forms/FormSignIn.component";

const WestContainer = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    console.log("West isAuthenticated = " + isAuthenticated);
  }, []);

  return (
    <div>
      <FormSignUp></FormSignUp>
      <FormSingIn></FormSingIn>
    </div>
  );
};

export default WestContainer;
