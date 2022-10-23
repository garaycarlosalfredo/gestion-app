import React from "react";

function Input({ formik, value, type, placeholder, classes }) {
  return (
    <div class={`form-floating mb-3 ${classes}`}>
      <input
        class="form-control"
        id="floatingInput"
        placeholder={placeholder || ""}
        type={type || "text"}
        name={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[value]}
      />
      <label for="floatingInput">{placeholder}</label>
      {formik.errors[value] && formik.touched[value] && formik.errors[value]}
    </div>
  );
}

export default Input;
