

import {UserLogin,LoginUserMutation} from './__generated__/LoginUserMutation.graphql'
import graphql from "babel-plugin-relay/macro";
const {commitMutation} = require('react-relay');

function commitLoginMutation(
  enviroment,
  input
  ){
    console.log('enviroment',enviroment)
    console.log('input',input)
    return commitMutation<LoginUserMutation>(enviroment, {
      mutation: graphql`
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
    `,
      variables: {input},
      onCompleted: response => {console.log('complete')} /* Mutation completed */,
      onError: error => {console.log('error')} /* Mutation errored */,
    });
  }



export default commitLoginMutation