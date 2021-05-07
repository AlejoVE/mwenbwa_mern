const UserModel = require('../models/UserModel')


const getLeaves = async () =>  {

    try{
        const users = await UserModel.find()
        const totalUsers = users.length
        let totalLeaves = 0

        for(let user of users){
            totalLeaves += user.leaves
        }

        const result = totalLeaves / totalUsers

        return result

    } catch(err){
        console.log(err)
    }
}

module.exports = {getLeaves}