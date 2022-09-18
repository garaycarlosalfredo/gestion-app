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

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response);
      },
      onError: (err) => {
        reject(err);
      },
    });
  });
}

export default SignUpUserMutation;
