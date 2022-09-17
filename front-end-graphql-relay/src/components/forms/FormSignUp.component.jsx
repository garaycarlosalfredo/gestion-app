import React from "react";
import { useFormik } from "formik";
import { useRelayEnvironment } from "react-relay";

const FormSignUp = () => {
  const environment = useRelayEnvironment();

  //Formik configuration
  const formik = useFormik({
    initialValues: { email: "", password: "", phone: "" },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      /*
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              //console.log(values)
              //console.log(environment)
            }, 400);*/
      //userLoginMutation(environment, values);
    },
  });

  return (
    <div>
      <div>
        <p>Form Sign Up</p>

        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="name"
            type="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && formik.errors.name}
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && formik.errors.email}
          <input
            placeholder="phone"
            type="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && formik.errors.phone}
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
