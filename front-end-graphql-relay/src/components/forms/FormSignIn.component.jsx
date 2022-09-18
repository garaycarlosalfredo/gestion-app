import { useFormik } from "formik";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useRelayEnvironment } from "react-relay";

import AuthContext from "../../contexts/auth/authContext";

import SignInUserMutation from "../../mutations/SignInUserMutation.mutation";

const FormSignIn = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, setCookieUser } = authContext;
  const environment = useRelayEnvironment();
  //console.log('environment',environment)

  //Formik configuration
  const formik = useFormik({
    initialValues: { email: "", password: "" },
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
      SignInUserMutation(environment, values)
        .then((response) => {
          setCookieUser(response.signInUser);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <p>Form Sign In</p>

      <form onSubmit={formik.handleSubmit}>
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
          <button
            type="submit"
            disabled={formik.isSubmitting}
            data-bs-dismiss="modal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
