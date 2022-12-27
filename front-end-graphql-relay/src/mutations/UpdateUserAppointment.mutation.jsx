import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

const mutation = graphql`
  mutation UpdateUserAppointmentMutation($input: AppointmentUpdated) {
    updateAppointment(input: $input) {
      ... on appointmentSuccessResponse {
        appointment {
          userId
          title
          description
          tags
          _id
        }
      }
      ... on errorResponse {
        message
      }
    }
  }
`;

function UpdateUserAppointmentMutation(environment, input) {
  const variables = {
    input,
  };
  console.log("input", input);

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        //console.log("Response received from server. response", response);
        //console.log("Response received from server. errors", errors);
        resolve(response);
      },
      onError: (err) => {
        //console.error(err);
        reject(err);
      },
    });
  });
}

export default UpdateUserAppointmentMutation;
