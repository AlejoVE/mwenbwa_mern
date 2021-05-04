const UserModel = require('../models/UserModel')
const {generateJWT} = require('../helpers/jwt')



const signUp = async (req, res) => {

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

module.exports = {
    signUp
}