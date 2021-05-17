export const getTrees = async () => {


    const res = await fetch(`${process.env.REACT_APP_API_URL}trees/treesPos`)
    const data = await res.json()

    let treesFormated = new Array()

    data.trees.forEach(tree => {
        const newTree = {
            id: tree._id,
            loc: [tree.lat, tree.lon]
        }
        treesFormated.push(newTree) 
    });
    return treesFormated
}

