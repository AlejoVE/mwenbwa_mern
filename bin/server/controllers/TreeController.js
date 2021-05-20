"use strict";

var _fantasyNameGenerator = require("fantasy-name-generator");

var _getUserLeaves = require("../helpers/getUserLeaves");

var _getTreesUser = require("../helpers/getTreesUser");

var _getHistory = require("../helpers/getHistory");

var _getTreesInRadius = require("../helpers/getTreesInRadius");

var _removeTree = require("../helpers/removeTree");

const TreeModel = require('../models/TreeSchema');

const UserModel = require('../models/UserModel');

const ObjectId = require('mongodb').ObjectId;

const getAllTrees = async (req, res) => {
  try {
    const trees = await TreeModel.find();
    res.status(200).json({
      trees
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
    console.log(err);
  }
};

const getOneTree = async (req, res) => {
  const id = req.params.id;

  try {
    const findTreesInRadius = await (0, _getTreesInRadius.getTreesInRadius)(id);
    const tree = await TreeModel.findById(id).populate("owner", "userName").exec();
    res.status(200).json({
      tree,
      treesInRadius: findTreesInRadius
    });
  } catch (err) {
    res.status(404).json({
      err: "Id not found..."
    });
    console.log(err);
  }
};

const buyTree = async (req, res) => {
  const id = req.params.id;
  const userName = req.body.userName;
  const price = req.body.price;

  try {
    const randomName = (0, _fantasyNameGenerator.nameByRace)("elf", {
      gender: "female"
    });
    const {
      locked,
      owner
    } = await TreeModel.findById(id);
    const {
      userLeaves,
      userId
    } = await (0, _getUserLeaves.getUserLeaves)(userName);
    const {
      isInclude,
      userTrees
    } = await (0, _getTreesUser.getTreesUser)(userName, id);
    const history = await (0, _getHistory.getHistory)(id);

    if (isInclude) {
      res.status(400).json({
        message: "You have already this tree."
      });
      return;
    }

    if (userLeaves >= price && !locked) {
      if (owner) {
        await (0, _removeTree.removeTree)(owner, id);
      }

      userTrees.push(ObjectId(id));
      const user = await UserModel.findOneAndUpdate({
        userName: userName
      }, {
        trees: userTrees,
        leaves: userLeaves - price
      });
      const tree = await TreeModel.findOneAndUpdate({
        _id: id
      }, {
        owner: userId,
        name: randomName,
        price: price,
        history: [...history, {
          userName,
          date: new Date()
        }]
      }, {
        new: true
      });
      res.status(200).json({
        message: "You have a new tree",
        ok: true,
        tree
      });
      return;
    }

    res.status(400).json({
      message: "You don't have the leaves to buy a tree."
    });
  } catch (err) {
    res.status(400).json({
      message: err
    });
    console.log(err);
  }
};

const addComment = async (req, res) => {
  const id = req.params.id;
  const message = req.body.message;
  const userName = req.body.userName;

  try {
    const {
      comments
    } = await TreeModel.findById(id);
    const newMessage = {
      username: userName,
      message: message
    };

    if (message) {
      const tree = await TreeModel.findByIdAndUpdate(id, {
        comments: [...comments, newMessage]
      });
      res.status(200).json({
        message: "Comment added."
      });
      return;
    }

    res.status(400).json({
      message: "Please fill the comment."
    });
  } catch (err) {
    console.log(err);
  }
};

const getTreesPositions = async (req, res) => {
  try {
    const trees = await TreeModel.find({}, {
      lat: 1,
      lon: 1
    });
    let treesFormated = new Array();
    trees.forEach(tree => {
      const newTree = {
        id: tree._id,
        loc: [tree.lat, tree.lon]
      };
      treesFormated.push(newTree);
    });
    res.status(200).json({
      trees: treesFormated
    });
  } catch (err) {
    console.log(err);
  }
};

const lockTree = async (req, res) => {
  const id = req.params.id;
  const userName = req.username;
  const {
    isInclude
  } = await (0, _getTreesUser.getTreesUser)(userName, id);

  try {
    if (!isInclude) {
      res.status(400).json({
        msg: "You don't own this tree !"
      });
      return;
    }

    await TreeModel.findOneAndUpdate({
      _id: id
    }, {
      locked: true
    });
    res.status(200).json({
      msg: "The tree is locked."
    });
  } catch (err) {
    res.status(400).json({
      msg: err
    });
  }
};

module.exports = {
  getAllTrees,
  getOneTree,
  buyTree,
  addComment,
  getTreesPositions,
  lockTree
};
//# sourceMappingURL=TreeController.js.map