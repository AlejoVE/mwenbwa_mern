const UserModel = require('../models/UserModel')

const getTreesUser = async (userName) => {

    try{
        const user = await UserModel.findOne({userName: userName})
        const {trees} = user
        return trees
    } catch(err) {
        console.log(err)
    }
}

module.exports = {getTreesUser}