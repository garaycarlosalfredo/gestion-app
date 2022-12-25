const { getAllUserList, resolveTypeUser } = require("./user");

module.exports = {
  Query: {
    usersList: getAllUserList,
  },
  userResponse: resolveTypeUser,
};
