import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../contexts/auth/authContext";
import FormSignModal from "../../components/modal/FormSignModal.component";
import CardSign from "../../components/cards/CardSign.component";

const LANGUAGE = "es";

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

  return (
    <div>
      <div className="d-flex justify-content-center">
        <CardSign
          language={LANGUAGE}
          modal={"user"}
          idModal={"formSignInModal"}
          icon={"bi bi-person-check"}
          onClickHandle={handleSignInSelection}
        />
        <CardSign
          language={LANGUAGE}
          modal={"west"}
          idModal={"formSignUpModal"}
          icon={"bi bi-person-plus"}
          onClickHandle={handleSignUpSelection}
        />
      </div>
      <FormSignModal language={LANGUAGE} id={"formSignInModal"} />
    </div>
  );
};

export default WestContainer;
