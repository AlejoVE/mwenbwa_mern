import { useSelector } from "react-redux"


export const buyTree = async () => {
    const {auth, trees} = useSelector(state => state)
    console.log(auth, trees)
    try{

        // const res = await fetch(`${process.env.REACT_APP_API_URL}trees/buy/`)
    } catch(err) {
        console.log(err)
    }
}