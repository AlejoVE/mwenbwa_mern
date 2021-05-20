export const calculateLockedPrice = async (treesInRadius, targetTree) => {

    const {value} = await targetTree
    let totalValueOfAllTrees = 0
    let amountOfPlayersInRadius = 0
    let totalValueOfTreesPlayersInRadius = 0
    let isFirstTime = true
    let players = new Array()

    treesInRadius.forEach(tree => {
        console.log(tree)
        
    });

    const finalLockedPrice = value * 10 + (totalValueOfAllTrees * amountOfPlayersInRadius) - (totalValueOfTreesPlayersInRadius / amountOfPlayersInRadius)
}






// [value of the tree] × 10 + ([value of all the trees in 100m radius] × [amount of players in 100m radius]) - ([value of all player's trees in 100m radius] / [amount of players in 100m radius])