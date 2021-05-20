"use strict";

const UserModel = require('../models/UserModel');

const getUserLeaves = async username => {
  try {
    const [user] = await UserModel.find({
      userName: username
    });
    const userLeaves = user.leaves;
    const userId = user._id;
    return {
      userLeaves,
      userId
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserLeaves
};
//# sourceMappingURL=getUserLeaves.js.map