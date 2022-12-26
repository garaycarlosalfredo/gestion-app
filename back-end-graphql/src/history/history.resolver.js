const {
  updateHistory,
  getUserHistory,
  resolveTypeHistory,
} = require("./history");

module.exports = {
  Mutation: {
    getUserHistory: getUserHistory,
    updateHistory: updateHistory,
  },
  historyResponse: resolveTypeHistory,
};
