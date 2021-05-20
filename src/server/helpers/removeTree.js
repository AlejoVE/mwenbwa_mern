const UserModel = require ('../models/UserModel')

const removeTree = async (ownerId, treeId) => {
    
    try{
        
        const user = await UserModel.find({_id: ownerId})
        const trees = user[0].trees.filter(tree => tree != treeId)
        await UserModel.findOneAndUpdate({_id: ownerId}, {trees: trees})

    } catch (err) {
        console.log(err)
    }

}

module.exports={removeTree}