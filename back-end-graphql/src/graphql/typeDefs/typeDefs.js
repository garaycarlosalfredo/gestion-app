const { gql } = require("apollo-server");
const {
  createTypeDefsFromModel,
  createTypeDefsFromObject,
} = require("../../util/typeDefs/typeDefs");
const User = require("../../user/user.schema");
const Team = require("../../model/Team");
const Activity = require("../../model/Activity");
const { errorMessage } = require("../errorHandle/errorTypes");

//console.log(createTypeDefsFromObject('errorResponse',errorMessage('String')))
console.log(
  "createTypeDefsFromObject",
  createTypeDefsFromObject("errorResponse", errorMessage("String!"))
);
const typeDefs = gql`
  scalar Date

  ${createTypeDefsFromModel("User", User)}

  ${createTypeDefsFromModel("Team", Team)}

  ${createTypeDefsFromModel("Activity", Activity)}

  type SignInResponse {
    token: String
    message: String
  }

  type Query {
    usersList: [User]
    activityList: [Activity]
    teamList: [Team]
  }

  input UserSignIn {
    email: String
    password: String
  }
  input UserSignUp {
    firstName: String
    lastName: String
    numberId: String
    email: String
    phone: String
    password: String
  }

  type Mutation {
    signInUser(input: UserSignIn): authResponse
    signUpUser(input: UserSignUp): authResponse
    createTeam(
      name: String
      status: Boolean
      created: Date
      updated: Date
      members: [String]
    ): teamResponse
  }

  ${createTypeDefsFromObject("errorResponse", errorMessage("String!"))}

  type teamSuccessResponse {
    team: Team
  }

  type userSuccessResponse {
    user: User
  }

  type authSuccessResponse {
    token: String
    user: User
  }

  union teamResponse = teamSuccessResponse | errorResponse

  union userResponse = userSuccessResponse | errorResponse

  union authResponse = authSuccessResponse | errorResponse
`;
//console.log(typeDefs)

module.exports = typeDefs;
