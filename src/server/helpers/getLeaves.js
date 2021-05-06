const UserModel = require('../controllers/UserController')

const getLeaves = async () =>  {

    try{
        const users = await UserModel.find()
        const totalUsers = users.length
        let totalLeaves = 0

        for(let user of users){
            totalLeaves += user.leaves
        }

        console.log({totalUsers}, {totalLeaves});

    } catch(err){
        console.log(err)
    }
}

module.exports = {getLeaves}