import { useFormik } from "formik";
import SignInUserMutation from "../../mutations/SignInUserMutation.mutation";
import { useRelayEnvironment } from "react-relay";

const FormSignIn = () => {
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
      SignInUserMutation(environment, values);
    },
  });

  return (
    <div>
      <p>Form Sign In</p>

      <form onSubmit={formik.handleSubmit}>
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
  );
};

export default FormSignIn;
