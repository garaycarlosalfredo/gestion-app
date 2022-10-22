import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../contexts/auth/authContext";
import FormSignInModal from "../../components/forms/FormSignInModal.component";
import FormSignUpModal from "../../components/forms/FormSignUpModal.component";

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
        <div className="m-2">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Ya soy un usuario</h5>
              <p class="card-text">
                Si ya sos un usuario registrado, igresa por aquí
              </p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ width: "200px" }}
                data-bs-toggle="modal"
                data-bs-target="#formSignInModal"
                onClick={handleSignInSelection}
              >
                sign-in
              </a>
            </div>
          </div>
        </div>
        <div className="m-2">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">No soy usuario</h5>
              <p class="card-text">
                Si no sos usuario, completa los datos y generaremos un usuario
              </p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ width: "200px" }}
                data-bs-toggle="modal"
                data-bs-target="#formSignUpModal"
                onClick={handleSignUpSelection}
              >
                Sign-up
              </a>
            </div>
          </div>
        </div>
      </div>
      <FormSignInModal></FormSignInModal>
      <FormSignUpModal></FormSignUpModal>
    </div>
  );
};

export default WestContainer;
