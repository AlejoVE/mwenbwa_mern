const axios = require("axios").default;

const fetchData = async (query) => {
    const encodeQuery = Buffer.from(query).toString("UTF-8");

    let url = "https://en.wikipedia.org/w/api.php";

    const {data} = await axios.get(url, {
        params: {
            action: "opensearch",
            search: encodeQuery,
            limit: "1",
            format: "json",
        },
    });

    return data[3];
};

// fetchData("Platanus × acerifolia");

module.exports = {fetchData};
