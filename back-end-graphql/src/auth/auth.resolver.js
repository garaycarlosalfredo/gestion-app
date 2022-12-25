const { signUp, signIn, resolveTypeAuth } = require("./auth");

module.exports = {
  Mutation: {
    signInUser: signIn,
    signUpUser: signUp,
  },
  authResponse: resolveTypeAuth,
};
