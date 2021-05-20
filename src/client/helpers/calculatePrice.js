export const calculatePrice = async (treesInRadius, targetTree, uid) => {

    const {value, owner} = await targetTree
    const amountOfTreesInRadius = treesInRadius.length
    let totalValueOfTreesOfTargettedPlayer = 0
    let amountOfTreesOfTargettedPlayer = 1
    let totalValueOfTreesPlayers = 0
    let totalValueOfUserTreesInRadius = 0
    let targettedPlayer = owner._id;
    let isFirstTime = true

    treesInRadius.forEach((tree, i) => {
        const treeOwner = tree.owner
        const treeValue = tree.value
        
        if(treeOwner === uid){
            totalValueOfUserTreesInRadius += treeValue
            return
        }

        if(treeOwner){
            if(targettedPlayer === treeOwner){
                totalValueOfTreesOfTargettedPlayer += treeValue
    
                if(isFirstTime){
                    isFirstTime = false
                    return
                }
                amountOfTreesOfTargettedPlayer += 1
                return 
            }
            totalValueOfTreesPlayers += treeValue
        }
    });

    // console.log({value}, {totalValueOfTreesOfTargettedPlayer}, {amountOfTreesInRadius}, {amountOfTreesOfTargettedPlayer}, {totalValueOfTreesPlayers}, {totalValueOfUserTreesInRadius})

    const finalPrice = value + (totalValueOfTreesOfTargettedPlayer * (amountOfTreesInRadius / amountOfTreesOfTargettedPlayer)) + totalValueOfTreesPlayers - totalValueOfUserTreesInRadius
    
    return Math.round(Math.abs(finalPrice))

//     [value of the targetted tree] + ([value of all the targetted player's trees in 100m radius]
// × ([amount of trees in 100m radius] / [amount of tree of targetted player in 100m radius]))
// +[value of all the other players trees in 100m radius] - [value of all your tree in 100m radius]
}