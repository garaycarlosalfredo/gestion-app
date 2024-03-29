const { ApolloError } = require("apollo-server");
const User = require("../user/user.schema");
const bcryptjs = require("bcryptjs");
const { errorMessage } = require("../errorHandle/error");
const jwt = require("jsonwebtoken");
const { applySpec, mergeLeft } = require("ramda");

TOKEN_EXPIRATION_TIME_VALUE = process.env.TOKEN_EXPIRATION_TIME;
TOKEN_SECRET_WORD_VALUE = process.env.TOKEN_SECRET_WORD;

exports.signUp = async (root, args) => {
  const { input } = args;
  console.log("input", input);

  //(TODO) check errors

  const { email, password } = input;

  try {
    let checkUser = await User.findOne({ email });

    if (checkUser) {
      const userExist = "Usuario ya exsiste";
      return new ApolloError("userExist", 500);
    }

    newUser = new User(input);

    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(password, salt);
    await newUser.save();

    const payload = {
      user: {
        id: newUser.id,
      },
    };
    const token = jwt.sign(payload, TOKEN_SECRET_WORD_VALUE, {
      expiresIn: TOKEN_EXPIRATION_TIME_VALUE,
    });

    return {
      token,
      user: newUser,
    };
  } catch (error) {
    console.log("error al intentar guardar  un usuario : ", error);
    return { message: "error" };
  }
};

exports.signIn = async (root, args) => {
  //revisar si hay errores
  //Extraer el objeto del input
  const { input } = args;
  //Extraer email y password
  const { email, password } = input;

  try {
    //Revisar que sea un usuario registrado
    let user = await User.findOne({ email });

    if (!user) {
      const userExist = "Usuario no exsiste";
      console.log(userExist);
      //return userExist
      return new ApolloError("userNotExist", 500);
    }

    const passCorrecto = await bcryptjs.compare(password, user.password);

    if (!passCorrecto) {
      const userExist = "password incorrecto";
      console.log(userExist);
      //return userExist
      return new ApolloError("password incorrecto", 500);
    }

    //Si es todo correcto creo el jwt
    //Crear y firmar el jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, TOKEN_SECRET_WORD_VALUE, {
      expiresIn: TOKEN_EXPIRATION_TIME_VALUE,
    });

    //user.token = token

    console.log("user", user);

    return {
      token,
      user,
    };
  } catch (error) {
    console.log("erorr al intentar lograr  un usuario : ", error);
    return { message: "error en login" };
  }
};

exports.resolveTypeAuth = {
  __resolveType(obj) {
    if (obj.message) {
      return "errorResponse";
    }
    if (obj.token) {
      return "authSuccessResponse";
    }
  },
};
