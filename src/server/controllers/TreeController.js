const TreeModel = require('../models/TreeSchema');
const UserModel = require('../models/UserModel');
const ObjectId = require('mongodb').ObjectId;
import {nameByRace} from "fantasy-name-generator";
import {getUserLeaves} from '../helpers/getUserLeaves';
import {getTreesUser} from '../helpers/getTreesUser';
import {getHistory} from '../helpers/getHistory';


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

        const tree = await TreeModel.findById(id).populate("owner", "userName").exec()
        res.status(200).json({tree})

    } catch(err){
        res.status(404).json({err: "Id not found..."})
        console.log(err);
    }
}

const buyTree = async (req,res) => {

    const id = req.params.id
    const userName = req.body.userName
    

    try {
        const randomName = nameByRace("elf", { gender: "female" })
        const {price, locked} = await TreeModel.findById(id)
        const {userLeaves, userId} = await getUserLeaves(userName)
        const {isInclude, userTrees} = await getTreesUser(userName, id)
        const history = await getHistory(id)

        console.log(isInclude)
        if(isInclude) {
            res.status(400).json({message: "You have already this tree."})
            return
        }

        if(userLeaves >= price && !locked) {

            userTrees.push(ObjectId(id))
            const user = await UserModel.findOneAndUpdate({userName: userName}, {trees: userTrees, leaves: userLeaves - price})
            const tree = await TreeModel.findOneAndUpdate({_id: id}, {owner: userId, name: randomName, history: [...history, {userName, date: new Date()}]}, {new: true})
            res.status(200).json({message: "You have a new tree", ok:true, tree})
            return
        }

        res.status(400).json({message: "You don't have the leaves to buy a tree."})

    } catch(err) {
        res.status(400).json({message: err})
        console.log(err)
    }
}

const addComment = async (req,res) => {

    const id = req.params.id
    const message = req.body.message
    const userName = req.body.userName

    try{
        const {comments} = await TreeModel.findById(id)
        const newMessage = {username: userName, message: message}
        
        if(message){
            const tree = await TreeModel.findByIdAndUpdate(id, {comments: [...comments, newMessage]})
            res.status(200).json({message: "Comment added."})
            return
        }

        res.status(400).json({message: "Please fill the comment."})

    } catch(err) {
        console.log(err)
    }
}

const getTreesPositions = async (req, res) => {

    try {
        const trees = await TreeModel.find({}, { lat: 1, lon: 1 })
        
        let treesFormated = new Array()
        trees.forEach(tree => {
            const newTree = {
                id: tree._id,
                loc: [tree.lat, tree.lon]
            }
            treesFormated.push(newTree)
        });
        res.status(200).json({trees: treesFormated})
    } catch(err) {
        console.log(err)
    }
}


module.exports = {
    getAllTrees,
    getOneTree,
    buyTree,
    addComment,
    getTreesPositions
}