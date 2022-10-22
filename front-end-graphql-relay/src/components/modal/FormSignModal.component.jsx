import React from "react";
import PropTypes from "prop-types";

import FormSignIn from "../forms/FormSignIn.component";
import FormSignUp from "../forms/FormSignUp.component";

import { equals } from "ramda";

const FormSignInModalComponent = ({ id }) => {
  return (
    <div>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ingresa tus datos
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {equals(id, "formSignInModal") ? <FormSignIn /> : <FormSignUp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormSignInModalComponent.propTypes = {};

export default FormSignInModalComponent;
