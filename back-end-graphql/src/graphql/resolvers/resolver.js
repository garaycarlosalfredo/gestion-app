const {getAllUserList,signUp, resolveTypeUser} = require('./user/userResolver')
const {getActivityList} = require('./activity/activityResolver')
const {getAllTeamList,createTeam, resolveTypeTeam} = require('./team/teamResolver')

const resolvers = {
    Query :{
        usersList : getAllUserList,
        activityList : getActivityList,
        teamList : getAllTeamList
    },
    Mutation: {
        createUser : signUp,
        createTeam : createTeam
    },
    teamResponse: resolveTypeTeam,
    userResponse: resolveTypeUser
}

module.exports = resolvers