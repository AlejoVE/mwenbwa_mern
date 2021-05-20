"use strict";

const UserModel = require('../models/UserModel');

const getTreesUser = async (userName, id) => {
  try {
    const user = await UserModel.findOne({
      userName: userName
    });
    const userTrees = user.trees;
    const isInclude = userTrees.includes(id);
    return {
      isInclude,
      userTrees
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTreesUser
};
//# sourceMappingURL=getTreesUser.js.map