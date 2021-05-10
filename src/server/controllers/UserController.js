const UserModel = require('../models/UserModel')
const TreeModel = require('../models/TreeSchema')
const {generateJWT} = require('../helpers/jwt')
const bcrypt = require('bcrypt');
import {getLeaves} from '../helpers/getLeaves'
import {nameByRace} from "fantasy-name-generator";

const signup = async (req, res) => {

    const {userName, email, password, color} = req.body

    try {

        //Search trees without owner
        const trees = await TreeModel.find({owner: null}).limit(3)
        const [treeOne, treeTwo, treeThree] = trees
        const treesArray = new Array(treeOne._id, treeTwo._id, treeThree._id)

        //Give leaves 
        const leaves = await getLeaves();

        //Create user
        const user = await UserModel.create({userName, email, password, trees: treesArray, color, leaves})



        //Add history , owner and random name to trees
        for(let tree of trees){
            const randomName = nameByRace("elf")
            const userObject = {
                owner: user._id,
                history: [...tree.history, { username: user.userName, date: new Date().toDateString(), name: randomName}]
            }
            const res = await TreeModel.updateOne({ _id:tree._id}, { $set: userObject})
            console.log(res)
        }

        const token = await generateJWT(user._id)
        
        res.status(201).json({token, message: "Your account is registered"})
        
    } catch(err){
        console.log(err)
        res.status(400).json({err:err.message});
    }
}

const login = async (req, res) =>{

    const {userName, password} = req.body

    try{
        const user = await UserModel.findOne({userName})

        if(!user){
            res.status(404).json({err: "User not found"})
            return 
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){
            res.status(400).json({err: "Bad password"})
            return 
        }

        const token = await generateJWT(user._id)
        res.status(200).json({token, message: "You are connected."})

    } catch (err) {
        console.log(err)
        res.status(500).json({err: err.message})
    }   
}


module.exports = {
    signup,
    login
}