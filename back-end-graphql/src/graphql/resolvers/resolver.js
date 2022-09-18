const { getAllUserList, resolveTypeUser } = require("./user/userResolver");
const { getActivityList } = require("./activity/activityResolver");
const {
  getAllTeamList,
  createTeam,
  resolveTypeTeam,
} = require("./team/teamResolver");
const { signUp, signIn, resolveTypeAuth } = require("./auth/authResolver");

const resolvers = {
  Query: {
    usersList: getAllUserList,
    activityList: getActivityList,
    teamList: getAllTeamList,
  },
  Mutation: {
    signInUser: signIn,
    signUpUser: signUp,
    createTeam: createTeam,
  },
  teamResponse: resolveTypeTeam,
  userResponse: resolveTypeUser,
  authResponse: resolveTypeAuth,
};

module.exports = resolvers;
