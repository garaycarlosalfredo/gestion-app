const { values } = require("ramda");
const {
  map,
  compose,
  concat,
  props,
  lensProp,
  view,
  pluck,
  project,
  replace,
  isNil,
  defaultTo,
  set,
  when,
} = require("ramda");
const User = require("../../user/user.schema");
const Team = require("../../model/Team");

exports.createTypeDefsFromModel = (name, model) => {
  const modelObj = model.schema.obj;
  modelObj._id = { alias: "String" };
  const keys = Object.keys(modelObj);
  keys.forEach((element) => {
    if (Array.isArray(modelObj[element])) {
      modelObj[element].alias = modelObj[element][0].alias;
    }
  });
  const types = pluck("alias", modelObj);
  const str = JSON.stringify(types).replace(/['"]+/g, "");
  const strHeader = `type ${name} `;
  let typedef = strHeader.concat(str);
  return typedef;
};

exports.createTypeDefsFromObject = (name, object) => {
  //console.log(`to create  ${name} ${object}`)

  const keys = Object.keys(object);
  const values = Object.values(object);
  const str = JSON.stringify(object).replace(/['"]+/g, "");

  const strHeader = `type ${name} `;
  return strHeader.concat(str);
};
