"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreesInRadius = void 0;

var _geolocationUtils = require("geolocation-utils");

const TreeModel = require('../models/TreeSchema');

const getTreesInRadius = async id => {
  try {
    const tree = await TreeModel.findById({
      _id: id
    });
    let lat = tree.lat;
    let lon = tree.lon;
    const deg = 0.00090009;
    const treesInSquare = await TreeModel.find({
      "lat": {
        $gt: lat - deg,
        $lt: lat + deg
      },
      "lon": {
        $gt: lon - deg,
        $lt: lon + deg
      }
    });
    const center = {
      lat: lat,
      lon: lon
    };
    const radius = 100;
    const treesInRadius = new Array();
    treesInSquare.forEach(tree => {
      const isInRadius = (0, _geolocationUtils.insideCircle)({
        lat: tree.lat,
        lon: tree.lon
      }, center, radius);
      if (isInRadius) treesInRadius.push(tree);
    });
    return treesInRadius;
  } catch (err) {
    console.log(err);
  }
};

exports.getTreesInRadius = getTreesInRadius;
//# sourceMappingURL=getTreesInRadius.js.map