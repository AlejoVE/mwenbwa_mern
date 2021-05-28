const UserModel = require('../models/UserModel')

const sendLeaves = async () => {

    try {
        const users = await UserModel.find().select('treesCount leaves')
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
        
    } catch (err) {
        console.log(err)
    }
}
    
    
module.exports = {
    sendLeaves,
    removeLeaves
}
    // const sendLeaves = async () => {
    
    //     try {
    //         const users = await UserModel.find().select('trees leaves')
    
    //         for(const user of users){
    //             const trees = user.trees
    //             let totalValue = 0
    
    //             for(const treeId of trees){
    //                 const tree = await TreeModel.find({_id: treeId})
    //                 const value = tree[0].value
    //                 totalValue += value
    //             }
    
    //             await UserModel.findOneAndUpdate({_id: user._id}, {leaves: Math.round(user.leaves + totalValue)})
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }