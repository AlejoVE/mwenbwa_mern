const UserModel = require('../models/UserModel')
const TreeModel = require('../models/TreeSchema')
const GamelogModel = require('../models/GamelogSchema')

const {generateJWT} = require('../helpers/jwt')
const bcrypt = require('bcrypt');
import {getLeaves} from '../helpers/getLeaves'
import {nameByRace} from "fantasy-name-generator";
import {verifyUser} from '../helpers/verifyUser';
import {getUser} from '../helpers/getUser';



const signup = async (req, res) => {

    const {userName, email, password, color} = req.body

    try {
        //Check if username or email exist
        const isExist = await verifyUser(userName, email)

        if(!isExist.ok){
            res.status(400).json({err: isExist.err})
            return
        }

        //Search trees without owner
        const trees = await TreeModel.find({owner: null}).limit(3)
        const [treeOne, treeTwo, treeThree] = trees
        const treesArray = new Array(treeOne._id, treeTwo._id, treeThree._id)
        const treesCount = treesArray.length
        //Give leaves 
        const leaves = await getLeaves();

        //Create user
        const user = await UserModel.create({userName, email, password, trees: treesArray, treesCount, color, leaves})



        //Add history , owner and random name to trees
        for(let tree of trees){
            const randomName = nameByRace("elf")
            const userObject = {
                owner: user._id,
                history: [...tree.history, { username: user.userName, date: new Date().toDateString(), name: randomName}]
            }
            await TreeModel.updateOne({ _id:tree._id}, { $set: userObject})
        }
        await GamelogModel.create({actions: `Welcome ${userName} 👋`})
        const token = await generateJWT(user._id)
        
        res.status(201).json({token, userName: user.userName, uid: user._id})
        
    } catch(err){
        console.log(err)
        res.status(500).json({err: "Server error, Try again later"});
    }
}

const login = async (req, res) =>{

    const {userName, password} = req.body


    try{
        const user = await UserModel.findOne({userName})


        if(!user){
            res.status(404).json({err: "Wrong username or password."})
            return 
        }
        
        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){
            res.status(400).json({err: "Wrong username or password."})
            return 
        }

        await GamelogModel.create({actions: `${user.userName} is connected 😎`})
        const token = await generateJWT(user._id, user.userName)
        res.status(200).json({
            token, 
            userName: user.userName,
            uid: user._id, 
            leaves: user.leaves,
            trees: user.trees.length,
            color: user.color 
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({err: "Server error, Try again later"})
    }   
}

const generateToken = async (req, res) => {
    const uid = req.uid
    const username = req.username
    
    try{
            const token = await generateJWT(uid, username)
            const {color, leaves, trees} = await getUser(uid)
            await GamelogModel.create({actions: `${username} is connected 😎`})
            res.status(200).json({token, uid, username, color, leaves, trees: trees.length})

    } catch(err){
        res.status(500).json({err: "Server error, Try again later"})
    }
}

const getLeaderboard = async (req, res) => {

    try{
        const users = await UserModel.find().select({userName: 1, treesCount: 1}).sort({treesCount: -1}).limit(10)
        res.status(200).json({users: users})
    } catch (err) {
        res.status(500).json({err: "Server error, Try again later"})
    }
}

const getActions = async (req, res) => {

    try {
        const actions = await GamelogModel.find().select({actions: 1}).sort({createdAt: -1}).limit(10)
        res.status(200).json({actions})
    } catch (err) {
        res.status(500).json({err: "Server error, Try again later"})
    }
}

const editColor = async (req, res) => {

    const {uid, color} = req.body

    
    try {
        const user = await UserModel.findByIdAndUpdate(
            { _id: uid }, 
            { $set: {color: color} },
            { new: true }
        ).select({color: 1})

        res.status(200).json({user, ok:true})

    } catch(err) {
        console.log(err)
        res.status(500).json({err: "Server error, Try again later"})
    }
}


module.exports = {
    signup,
    login,
    generateToken,
    getLeaderboard,
    getActions,
    editColor
}