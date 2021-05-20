const TreeModel = require ('../models/TreeSchema')
import {insideCircle} from 'geolocation-utils'


export const getTreesInRadius =  async (id) =>{

    try{
        const tree = await TreeModel.findById({_id: id})
        let lat = tree.lat;
        let lon = tree.lon;
        // 1° = 111km => 100m = 0,00090009° conversion
        const deg = 0.00090009;
        
        // get trees
        const treesInSquare = await TreeModel.find({
            "lat": {
                $gt: lat - deg , $lt: lat + deg 
            }, "lon": {
                $gt: lon - deg , $lt: lon + deg 
            }
        })

        const center = {lat: lat, lon: lon}
        const radius = 100 // meters

        const treesInRadius = new Array()
        
        treesInSquare.forEach(tree =>{
            const isInRadius = insideCircle({lat: tree.lat, lon: tree.lon}, center, radius)

            if(isInRadius)
                treesInRadius.push(tree)
        })
        
        return treesInRadius

    } catch(err) {
        console.log(err)
    }
    
}