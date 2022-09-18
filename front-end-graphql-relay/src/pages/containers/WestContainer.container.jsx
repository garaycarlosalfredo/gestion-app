import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../contexts/auth/authContext";
import FormSignUp from "../../components/forms/FormSignUp.component";
import FormSingIn from "../../components/forms/FormSignIn.component";

const actionSelectionOptions = {
  selection_empty: "selection-empty",
  selection_signin: "selection-signin",
  selection_signup: "selection-signup",
};

const WestContainer = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const [actionSelection, setActionSelection] = useState(
    actionSelectionOptions.selection_empty
  );

  useEffect(() => {
    console.log("West actionSelection = " + actionSelection);
  }, []);

  const handleSignInSelection = () => {
    setActionSelection(actionSelectionOptions.selection_signin);
  };

  const handleSignUpSelection = () => {
    setActionSelection(actionSelectionOptions.selection_signup);
  };

  const handleNoSelection = () => {
    setActionSelection(actionSelectionOptions.selection_empty);
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={handleSignInSelection}>SignIn</button>
        </div>
        <div>
          <button onClick={handleSignUpSelection}>SignUp</button>
        </div>
        <div>
          <button onClick={handleNoSelection}>Cancelar</button>
        </div>
      </div>

      {actionSelection === actionSelectionOptions.selection_signup ? (
        <FormSignUp></FormSignUp>
      ) : null}
      {actionSelection === actionSelectionOptions.selection_signin ? (
        <FormSingIn></FormSingIn>
      ) : null}
    </div>
  );
};

export default WestContainer;
