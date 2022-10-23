import React from "react";

function SubmitButton({ formik, dismiss, type, text, classes }) {
  return (
    <div class={`${classes}`}>
      <button
        className="submit-button btn btn-primary mb-3"
        type={type || "submit"}
        disabled={formik.isSubmitting}
        data-bs-dismiss={dismiss}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
