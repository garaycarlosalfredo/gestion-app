import React from "react";
import PropTypes from "prop-types";

import FormSignUp from "./FormSignUp.component";

const FormSignUpModal = (props) => {
  console.log(props);
  return (
    <div>
      <div
        class="modal fade"
        id="formSignUpModal"
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
              <FormSignUp></FormSignUp>
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

FormSignUpModal.propTypes = {};

export default FormSignUpModal;
