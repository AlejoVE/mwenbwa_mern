const TreeModel = require('../models/TreeSchema')
import { nameByRace } from "fantasy-name-generator";
import {getUserLeaves} from '../helpers/getUserLeaves';


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

const buyTree = async (req,res) => {

    const id = req.params.id
    const userName = req.body.userName

    console.log(userName)



    try {
        const randomName = nameByRace("elf", { gender: "female" })
        const {price, locked} = await TreeModel.findById(id)
        const {userLeaves, userId} = await getUserLeaves(userName)

        // !!!! add the tree to user and change history 
        if(userLeaves >= price && !locked) {
            const tree = await TreeModel.findOneAndUpdate({_id: id}, {owner: userId, name: randomName})
            console.log(tree)
            res.status(201).json({tree})
            return
        }

        res.status(400).json({message: "You don't have the leaves to buy a tree."})

    } catch(err) {
        console.log(err);
    }
}
module.exports = {
    getAllTrees,
    getOneTree,
    buyTree
}