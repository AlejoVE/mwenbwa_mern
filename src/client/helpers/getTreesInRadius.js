
export const getTreesInRadius = async (id) => {

    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}trees/find/${id}`)
        const {treesInRadius} = await res.json()

        return treesInRadius
    } catch(err){
        console.log(err)
    }
}