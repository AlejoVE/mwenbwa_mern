const UserModel = require('../models/UserModel')

module.exports.signUp = async (req, res) => {

    const {userName, email, password} = req.body

    try {
        const user = await UserModel.create({userName, email, password})
        res.status(201).json(user)
    } catch(err){
        console.log(err)
        res.status(400).json({err:err.message});
    }
}