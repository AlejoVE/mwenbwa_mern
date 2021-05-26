const TreeModel = require ('../models/TreeSchema')

const getHistory = async (treeId) => {

    try {
        const tree = await TreeModel.findById(treeId)
        const history = tree.history
        return history

    } catch (err) {
        console.log(err)
    }
}

module.exports = {getHistory}