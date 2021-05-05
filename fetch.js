const axios = require('axios').default;

const fetchData = async (query) => {

    let url = "https://en.wikipedia.org/w/api.php"; 
    
    const {data} = await axios.get(url, {

        params :{
            action: "opensearch",
            search: query,
            limit: "1",
            format: "json",
        }
    })

    console.log(data)
    return data
}

fetchData();à
