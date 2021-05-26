import UserModel from '../models/UserModel'

const getUser = async(id) => {

    try {

        const {color, leaves, trees} = await UserModel.findById({_id: id})
        return {color, leaves, trees}
    } catch(err){
        console.log(err)
    }
}

module.exports={getUser}