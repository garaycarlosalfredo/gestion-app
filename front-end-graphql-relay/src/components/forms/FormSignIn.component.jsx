import { useFormik } from "formik";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useRelayEnvironment } from "react-relay";
import { path, prop } from "ramda";

import AuthContext from "../../contexts/auth/authContext";

import Input from "./input/Input.component";
import SubmitButton from "./input/SubmitButton.component";
import SignInUserMutation from "../../mutations/SignInUserMutation.mutation";
//import styles from "./FormSign.styles";
const t = require("../../text/text.json");

const FormSignIn = ({ language }) => {
  const txt = path([language, "modal", "user", "form"], t);

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

  /*
            <input
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label for="floatingInput">Email address</label>
          {formik.errors.email && formik.touched.email && formik.errors.email}
   */

  /*
          <div class="form-floating mb-3">
          <input
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <label for="floatingPassword">Password</label>
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </div>
   */

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          value={"email"}
          type={"email"}
          placeholder={"Email address"}
        />
        <Input
          formik={formik}
          value={"password"}
          type={"password"}
          placeholder={"password"}
        />
        <SubmitButton formik={formik} dismiss={"modal"} text={"Submit"} />
      </form>
    </div>
  );
};

export default FormSignIn;
