const UserModel = require('../models/UserModel')

const sendLeaves = async () => {

    try {
        const users = await UserModel.find()

        for(const user of users){
            await UserModel.findOneAndUpdate({_id: user._id}, {leaves: Math.round(user.leaves + user.treesCount)})
        }

    } catch (err) {
        console.log(err)
    }
}

const removeLeaves = async () => {

    try {
        const users = await UserModel.find()

        for(const user of users){
            await UserModel.findOneAndUpdate({_id: user._id}, {leaves: Math.round(user.leaves / 2)})
        }
        console.log('toto')

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    sendLeaves,
    removeLeaves
}