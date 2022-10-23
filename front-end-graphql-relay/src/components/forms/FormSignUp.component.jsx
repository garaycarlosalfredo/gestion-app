import React, { useContext } from "react";
import { useFormik } from "formik";
import { useRelayEnvironment } from "react-relay";
import { Input, SubmitButton } from "../core";
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
          <SubmitButton formik={formik} dismiss={"modal"} text={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
