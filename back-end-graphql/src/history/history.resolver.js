const { updateHistory, resolveTypeHistory } = require("./history");

module.exports = {
  Mutation: {
    updateHistory: updateHistory,
  },
  historyResponse: resolveTypeHistory,
};
