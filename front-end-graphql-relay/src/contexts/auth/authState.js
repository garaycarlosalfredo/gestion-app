import React, { useReducer, useState } from "react";
import AuthContext from "./authContext";
import { useCookies } from "react-cookie";

const AuthState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "isAuthenticated",
    "token",
    "user",
  ]);
  const initialState = {
    token: cookies.token,
    isAuthenticated: cookies.isAuthenticated || false,
    user: cookies.user,
  };

  const [state, setState] = useState(initialState);

  const setCookieUser = (input) => {
    console.log("en Context input", input);
    if (input) {
      setCookie("isAuthenticated", true);
      setCookie("user", input.user);
      setCookie("token", input.token);
    }
    setState({
      ...state,
      isAuthenticated: true,
      user: input.user,
      token: input.token,
    });
  };

  const removeCookieUser = (input) => {
    console.log("en Context input remove", input);
    removeCookie("isAuthenticated");
    removeCookie("user");
    removeCookie("token");
    setState({
      ...state,
      isAuthenticated: false,
      user: undefined,
      token: undefined,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        setCookieUser,
        removeCookieUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
