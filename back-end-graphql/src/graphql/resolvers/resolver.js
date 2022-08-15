const {getAllUserList,signUp, signIn, resolveTypeUser} = require('./user/userResolver')
const {getActivityList} = require('./activity/activityResolver')
const {getAllTeamList,createTeam, resolveTypeTeam} = require('./team/teamResolver')

const resolvers = {
    Query :{
        usersList : getAllUserList,
        activityList : getActivityList,
        teamList : getAllTeamList
    },
    Mutation: {
        loginUser :signIn,
        createUser : signUp,
        createTeam : createTeam
    },
    teamResponse: resolveTypeTeam,
    userResponse: resolveTypeUser
}

module.exports = resolvers