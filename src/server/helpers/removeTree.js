const UserModel = require ('../models/UserModel')

const removeTree = async (ownerId, treeId) => {
    
    try{
        
        const user = await UserModel.find({_id: ownerId})
        const trees = user[0].trees.filter(tree => tree != treeId)
        const treesCount = user[0].treesCount - 1
        await UserModel.findOneAndUpdate({_id: ownerId}, {trees: trees, treesCount: treesCount})

    } catch (err) {
        console.log(err)
    }

}

module.exports={removeTree}