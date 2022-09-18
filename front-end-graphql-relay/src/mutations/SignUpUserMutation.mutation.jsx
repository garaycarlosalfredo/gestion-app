import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

const mutation = graphql`
  mutation SignUpUserMutation($input: UserSignUp) {
    signUpUser(input: $input) {
      ... on errorResponse {
        message
      }
      ... on authSuccessResponse {
        token
        user {
          firstName
          lastName
          email
          phone
          _id
        }
      }
    }
  }
`;

function SignUpUserMutation(environment, input) {
  const variables = {
    input,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Response received from server. response", response);
      console.log("Response received from server. errors", errors);
    },
    onError: (err) => console.error(err),
  });
}

export default SignUpUserMutation;
