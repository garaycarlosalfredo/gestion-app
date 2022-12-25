const { mergeRight, mergeLeft } = require("ramda");
const History = require("../history/history.schema");

exports.updateHistory = async (root, args) => {
  const { input } = args;
  console.log("input", input);

  //(TODO) check errors

  try {
    const { userid } = input;
    let history = await History.findOne({ userid });

    if (history) {
      history.title = input.title;
      history.description = input.description;
      history.tags = input.tags;
      history.appointment = input.appointment;
    } else {
      history = new History(input);
      history.createDate = Date.now();
    }

    history.updated = Date.now();
    await history.save();

    return {
      history: history,
    };
  } catch (error) {
    console.log(
      "error al intentar actualizar el historial del un usuario : ",
      error
    );
    return { message: "error" };
  }
};

exports.resolveTypeHistory = {
  __resolveType(obj) {
    if (obj.message) {
      return "errorResponse";
    }
    if (obj.history) {
      return "historySuccessResponse";
    }
  },
};
