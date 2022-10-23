import { useFormik } from "formik";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useRelayEnvironment } from "react-relay";
import { path, prop } from "ramda";
import AuthContext from "../../contexts/auth/authContext";
import { Input, SubmitButton } from "../core";
import SignInUserMutation from "../../mutations/SignInUserMutation.mutation";
const t = require("../../text/text.json");

const FormSignIn = ({ language }) => {
  const txt = path([language, "modal", "user", "form"], t);

  const authContext = useContext(AuthContext);
  const { isAuthenticated, setCookieUser } = authContext;
  const environment = useRelayEnvironment();
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
