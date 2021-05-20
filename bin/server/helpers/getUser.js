"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

const getUser = async id => {
  try {
    const {
      color,
      leaves,
      trees
    } = await _UserModel.default.findById({
      _id: id
    });
    return {
      color,
      leaves,
      trees
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUser
};
//# sourceMappingURL=getUser.js.map