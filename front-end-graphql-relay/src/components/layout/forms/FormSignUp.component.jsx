import React, { useContext } from "react";
import { useFormik } from "formik";
import { useRelayEnvironment } from "react-relay";
import { Input, SubmitButton } from "../../core";
import AuthContext from "../../../contexts/auth/authContext";
import SignUpUserMutation from "../../../mutations/SignUpUserMutation.mutation";
import { useState } from "react";

const FormSignUp = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, setCookieUser } = authContext;
  const [submitError, setSubmitError] = useState(false);

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
        errors.numberId = "Invalid numberId";
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
          if (response.signUpUser != null) {
            setCookieUser(response.signUpUser);
            setSubmitting(false);
          } else {
            setSubmitError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            value={"firstName"}
            placeholder={"firstName"}
          />
          <Input formik={formik} value={"lastName"} placeholder={"lastName"} />
          <Input formik={formik} value={"numberId"} placeholder={"numberId"} />
          <Input
            formik={formik}
            value={"email"}
            type={"email"}
            placeholder={"Email address"}
          />
          <Input formik={formik} value={"phone"} placeholder={"phone"} />
          <Input
            formik={formik}
            value={"password"}
            type={"password"}
            placeholder={"password"}
          />
          <SubmitButton formik={formik} text={"Submit"} />
          {submitError ? (
            <div
              class="alert alert-danger"
              role="alert"
              id="alert-error-sign-up"
            >
              This is a danger alert with{" "}
              <a href="#" class="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
