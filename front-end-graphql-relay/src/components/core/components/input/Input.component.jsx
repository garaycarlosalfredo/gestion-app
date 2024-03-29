import React from "react";

function Input({ formik, value, type, placeholder, classes }) {
  const isNotValid =
    formik.errors[value] && formik.touched[value] && formik.errors[value];
  return (
    <div class={`form-floating mb-3 ${classes}`}>
      <input
        class={`form-control ${isNotValid ? "is-invalid" : ""}`}
        id="floatingInput"
        placeholder={placeholder || ""}
        type={type || "text"}
        name={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[value]}
      />
      <label for="floatingInput">{placeholder}</label>
      <div class="invalid-feedback">{isNotValid}</div>
    </div>
  );
}

export default Input;
