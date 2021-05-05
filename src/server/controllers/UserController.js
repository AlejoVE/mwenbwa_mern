const UserModel = require('../models/UserModel')
const {generateJWT} = require('../helpers/jwt')
const bcrypt = require('bcrypt');



const signup = async (req, res) => {

    const {userName, email, password} = req.body

    try {
        const user = await UserModel.create({userName, email, password})

        const token = await generateJWT(user._id)

        res.status(201).json({token, message: "The token is OK"})
        
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

module.exports = {
    signup,
    login
}