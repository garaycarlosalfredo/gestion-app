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

    return { history };
  } catch (error) {
    console.log(
      "error al intentar actualizar el historial del un usuario : ",
      error
    );
    return { message: "error" };
  }
};

exports.getUserHistory = async (root, args) => {
  const { input } = args;
  try {
    const { userId } = input;
    // Search user history
    const history = await History.find({ userId });
    console.log("userHistory", history);
    return history ? { history } : { message: "No history available" };
  } catch (error) {
    console.error("erorr al intentar buscar el historial del usuario", error);
    res.status(400).send("hubo un error");
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
