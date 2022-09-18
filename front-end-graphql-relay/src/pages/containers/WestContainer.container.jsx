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

  return (
    <div>
      <div>
        <div>
          <button
            type="button"
            class="btn btn-primary m-1"
            style={{ width: "200px" }}
            data-bs-toggle="modal"
            data-bs-target="#formModal"
            onClick={handleSignInSelection}
          >
            SignIn
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary m-1"
            style={{ width: "200px" }}
            data-bs-toggle="modal"
            data-bs-target="#formModal"
            onClick={handleSignUpSelection}
          >
            SignUp
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="formModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {actionSelection === actionSelectionOptions.selection_signup ? (
                <FormSignUp></FormSignUp>
              ) : null}
              {actionSelection === actionSelectionOptions.selection_signin ? (
                <FormSingIn></FormSingIn>
              ) : null}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WestContainer;
