import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../contexts/auth/authContext";
import FormModal from "../../components/layout/modal/FormModal.comonent";
import FormSignIn from "../../components/layout/forms/FormSignIn.component";
import FormSignUp from "../../components/layout/forms/FormSignUp.component";

import FormCard from "../../components/layout/card/FormCard.component";

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
        <FormCard
          cardClass={"m-2"}
          cardTitle={"Ya soy un usuario"}
          cardText={"Si ya sos un usuario registrado, igresa por aquí"}
        >
          <FormModal
            modalTitle={"Titulo del modal"}
            optionalCloseCondition={!isAuthenticated}
            buttonTitle={"Ingresar"}
          >
            <FormSignIn />
          </FormModal>
        </FormCard>
        <FormCard
          cardClass={"m-2"}
          cardTitle={"Ya soy un usuario"}
          cardText={"Si ya sos un usuario registrado, igresa por aquí"}
        >
          <FormModal
            modalTitle={"Titulo del modal"}
            optionalCloseCondition={!isAuthenticated}
            buttonTitle={"Ingresar"}
          >
            <FormSignUp />
          </FormModal>
        </FormCard>
      </div>
    </div>
  );
};

export default WestContainer;
