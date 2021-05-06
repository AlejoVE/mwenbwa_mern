const UserModel = require('../models/UserModel')
const TreeModel = require('../models/TreeSchema')
const {generateJWT} = require('../helpers/jwt')
const bcrypt = require('bcrypt');
import {getLeaves} from '../helpers/getLeaves'

const signup = async (req, res) => {

    const {userName, email, password, color} = req.body

    try {

        const trees = await TreeModel.find({owner: null}).limit(3)

        const [treeOne, treeTwo, treeThree] = trees
        const treesArray = new Array(treeOne._id, treeTwo._id, treeThree._id)
        getLeaves();;
        // const user = await UserModel.create({userName, email, password, trees: treesArray, color})



        // //Give 3 trees
        // for(let tree of trees){
        //     const userObject = {
        //         owner: user._id,
        //         history: [...tree.history, { username: user.userName, date: new Date().toDateString()}]
        //     }
        //     const res = await TreeModel.updateOne({ _id:tree._id}, { $set: userObject})
        //     console.log(res)
        // }

        // const token = await generateJWT(user._id)
        
        // res.status(201).json({token, message: "The token is OK"})
        
    } catch(err){
        console.log(err)
        res.status(400).json({err:err.message});
    }
}

const login = async (req, res) =>{

    const {userName, password} = req.body

    try{
        const user = await UserModel.findOne({userName})
        console.log(user)

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
        res.status(200).json({token, message: "The token is OK"})

    } catch (err) {
        console.log(err)
        res.status(500).json({err: err.message})
    }   
}

// const getAllUsers = async () => {

//     try{
//         const users = await UserModel.count()

//         console.log(users);


//         //15 minutes
//         // for(let user of users){
//         //     user.leaves += trees.length
//         // }
//     } catch(err) {
//         console.log(err);
//     }
// }

module.exports = {
    signup,
    login
}