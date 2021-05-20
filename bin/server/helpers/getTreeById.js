"use strict";

const TreeModel = require('../models/TreeSchema');

const ObjectId = require('mongoose').Types.ObjectId;

const getTreeById = async id => {
  try {
    const originalTree = await TreeModel.findOne({
      "_id": ObjectId(id)
    });
    return originalTree;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTreeById
};
//# sourceMappingURL=getTreeById.js.map