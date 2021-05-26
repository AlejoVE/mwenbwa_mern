const UserModel = require('../models/UserModel')


const getLeaves = async () =>  {

    try{
        const users = await UserModel.find()
        let totalUsers = users.length
        let totalLeaves = 0

        if(totalUsers === 0){
            totalUsers = 1
        }

        for(let user of users){
            totalLeaves += user.leaves
        }

        const result = Math.round(totalLeaves / totalUsers)

        return result

    } catch(err){
        console.log(err)
    }
}

module.exports = {getLeaves}