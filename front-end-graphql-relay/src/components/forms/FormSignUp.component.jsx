import React, { useContext } from "react";
import { useFormik } from "formik";
import { useRelayEnvironment } from "react-relay";

import AuthContext from "../../contexts/auth/authContext";

import SignUpUserMutation from "../../mutations/SignUpUserMutation.mutation";

const FormSignUp = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, setCookieUser } = authContext;

  const environment = useRelayEnvironment();

  //Formik configuration
  const formik = useFormik({
    initialValues: { firstName: "", email: "", password: "", phone: "" },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.numberId) {
        errors.numberId = "Required";
      } else if (!/[0-9]{7,10}$/i.test(values.numberId)) {
        errors.numberId = "Invalid numberId address";
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
      SignUpUserMutation(environment, values)
        .then((response) => {
          setCookieUser(response.signUpUser);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <div>
        <p>Form Sign Up</p>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              placeholder="firstName"
              type="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName}
          </div>
          <div>
            <input
              placeholder="lastName"
              type="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName &&
              formik.touched.lastName &&
              formik.errors.lastName}
          </div>
          <div>
            <input
              placeholder="numberId"
              type="numberId"
              name="numberId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberId}
            />
            {formik.errors.numberId &&
              formik.touched.numberId &&
              formik.errors.numberId}
          </div>
          <div>
            <input
              placeholder="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
          <div>
            <input
              placeholder="phone"
              type="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone && formik.errors.phone}
          </div>
          <div>
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
          </div>
          <div>
            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
