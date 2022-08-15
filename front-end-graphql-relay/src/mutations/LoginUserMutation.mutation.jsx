import { commitMutation, graphql } from "relay-runtime";

const mutation = graphql`
mutation LoginUserMutation($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      ... on userSuccessResponse {
        user {
          name
          email
        }
      }
      ... on errorResponse {
        message
      }
    }
  }
`

function LoginUserMutation(environment, cacheConfig={},user){
    return new Promise((resolve,reject)=>{
        commitMutation(environment,{
            cacheConfig,
            mutation,
            variables: {
                input: {
                    email: user.email,
                    password: user.password
                }
            },
            onCompleted: resolve,
            onError: reject
        })
    })
}

export default LoginUserMutation