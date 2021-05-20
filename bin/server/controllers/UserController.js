"use strict";

var _getLeaves = require("../helpers/getLeaves");

var _fantasyNameGenerator = require("fantasy-name-generator");

var _verifyUser = require("../helpers/verifyUser");

var _getUser = require("../helpers/getUser");

const UserModel = require('../models/UserModel');

const TreeModel = require('../models/TreeSchema');

const {
  generateJWT
} = require('../helpers/jwt');

const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  const {
    userName,
    email,
    password,
    color
  } = req.body;

  try {
    const isExist = await (0, _verifyUser.verifyUser)(userName, email);

    if (!isExist.ok) {
      res.status(400).json({
        msg: isExist.msg
      });
      return;
    }

    const trees = await TreeModel.find({
      owner: null
    }).limit(3);
    const [treeOne, treeTwo, treeThree] = trees;
    const treesArray = new Array(treeOne._id, treeTwo._id, treeThree._id);
    const leaves = await (0, _getLeaves.getLeaves)();
    const user = await UserModel.create({
      userName,
      email,
      password,
      trees: treesArray,
      color,
      leaves
    });

    for (let tree of trees) {
      const randomName = (0, _fantasyNameGenerator.nameByRace)("elf");
      const userObject = {
        owner: user._id,
        history: [...tree.history, {
          username: user.userName,
          date: new Date().toDateString(),
          name: randomName
        }]
      };
      const res = await TreeModel.updateOne({
        _id: tree._id
      }, {
        $set: userObject
      });
    }

    const token = await generateJWT(user._id);
    res.status(201).json({
      token,
      userName: user.userName,
      uid: user._id
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message
    });
  }
};

const login = async (req, res) => {
  const {
    userName,
    password
  } = req.body;

  try {
    const user = await UserModel.findOne({
      userName
    });

    if (!user) {
      res.status(404).json({
        err: "User not found"
      });
      return;
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      res.status(400).json({
        err: "Bad password"
      });
      return;
    }

    const token = await generateJWT(user._id, userName);
    res.status(200).json({
      token,
      userName,
      uid: user._id,
      leaves: user.leaves,
      trees: user.trees.length
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: err.message
    });
  }
};

const generateToken = async (req, res) => {
  const uid = req.uid;
  const username = req.username;

  try {
    const token = await generateJWT(uid, username);
    const {
      color,
      leaves,
      trees
    } = await (0, _getUser.getUser)(uid);
    res.status(200).json({
      token,
      uid,
      username,
      color,
      leaves,
      trees: trees.length
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup,
  login,
  generateToken
};
//# sourceMappingURL=UserController.js.map