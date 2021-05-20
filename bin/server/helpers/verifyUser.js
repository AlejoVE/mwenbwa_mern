"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

const verifyUser = async (userName, email) => {
  const mail = await _UserModel.default.find({
    email
  });
  const user = await _UserModel.default.find({
    userName
  });

  if (user.length === 1 && mail.length === 1) {
    return {
      ok: false,
      msg: "This username and email already exist."
    };
  }

  if (user.length === 1) {
    return {
      ok: false,
      msg: "This username already exist."
    };
  }

  if (mail.length === 1) {
    return {
      ok: false,
      msg: "This email already exist."
    };
  }

  return {
    ok: true
  };
};

module.exports = {
  verifyUser
};
//# sourceMappingURL=verifyUser.js.map