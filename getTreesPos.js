const path = require("path");
const util = require("util");
const fs = require("fs");
const { default: axios } = require("axios");

const writeFile = util.promisify(fs.writeFile);

const targetFile = path.join(__dirname, "data", "getTreesPos.json");

axios.get('http://localhost:12345/api/trees/treesPos', {
    method: "get"
    
}).then(async (res) =>{
    const trees = res.data.trees
    console.log("Writting new file...");
    const stringData = await JSON.stringify(trees, null, 2);
    await writeFile(targetFile, stringData);
    console.log("Done");
})
.catch((err)=>{console.log(err)})
