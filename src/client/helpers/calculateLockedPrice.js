export const calculateLockedPrice = async (treesInRadius, targetTree, uid) => {

    const {value, owner} = await targetTree
    let totalValueOfAllTrees = 0
    let totalValueOfTreesPlayersInRadius = 0
    let amountOfPlayersInRadius = 0
    let playersId = new Array()

    treesInRadius.forEach(tree => {
        totalValueOfAllTrees += tree.value

        if(tree.owner){
            totalValueOfTreesPlayersInRadius += tree.value

            if(playersId.includes(tree.owner)){
                return
            }
            playersId.push(tree.owner)

        }
        
    });

    if(!owner){
        totalValueOfTreesPlayersInRadius += value
    }

    if(!playersId.includes(uid)){
        amountOfPlayersInRadius += 1
    }

    amountOfPlayersInRadius += playersId.length

    const finalLockedPrice = value * 10 + (totalValueOfAllTrees * amountOfPlayersInRadius) - (totalValueOfTreesPlayersInRadius / amountOfPlayersInRadius)

    // console.log({value} , {totalValueOfAllTrees}, {amountOfPlayersInRadius}, {totalValueOfTreesPlayersInRadius})
    
    return Math.round(finalLockedPrice)
}






// [value of the tree] × 10 + ([value of all the trees in 100m radius] × [amount of players in 100m radius]) - ([value of all player's trees in 100m radius] / [amount of players in 100m radius])