import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

const mutation = graphql`
  mutation LoginUserMutation($input: UserLogin) {
    loginUser(input: $input) {
      ... on authSuccessResponse {
        token
        user {
          _id
          name
          phone
          email
        }
      }
      ... on errorResponse {
        message
      }
    }
  }
`;

function userLoginMutation(environment, input) {
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

export default userLoginMutation;
