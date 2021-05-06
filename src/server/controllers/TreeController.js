const TreeModel = require('../models/TreeSchema')


const getAllTrees = async (req, res) => {

    try{
        const trees = await TreeModel.find()
        res.status(200).json({trees})
    } catch(err) {
        res.status(500).json({err: err.message})
        console.log(err)
    }
}

const getOneTree = async (req, res) => {

    const id = req.params.id

    try{
        const tree = await TreeModel.findById(id)
        req.status(200).json({tree})
    } catch(err){
        res.status(404).json({err: "Id not found..."})
        console.log(err);
    }
}

module.exports = {
    getAllTrees,
    getOneTree
}