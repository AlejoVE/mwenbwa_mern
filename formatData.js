const fs = require("fs");
const util = require("util");
const path = require("path");
const {fetchData} = require("./fetchWikipedia");

// import {fetchData} from './fetchWikipedia'
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readDir = util.promisify(fs.readdir);

const filetPath = path.join(__dirname, "data", "arbustum.json");
const targetFile = path.join(__dirname, "data", "arbustumFormat.json");

const seeNames = (trees) => {
    let names = [];
    let links = [];
    trees.forEach(async (tree, i) => {
        let name = new Object
        name.name = tree.nom_complet;
        if (name.name === "en cours de détermination") {
            return;
        }
        if (names.some(item =>item.name === name.name)) {
            return;
        }
        if(!name.name){
            return
        }
        
        names.push(name);
    });
    return names;
};

const getLinks = async (getNames) => {
    for(const item of getNames){
        let link = await fetchData(item.name)
        if(!link[0]){
            link[0] = "No link for this tree"
        }

        item.link = link[0]
    }
    return getNames
}

const getFile = async () => {
    try {
        const file = await readFile(filetPath, "utf-8");
        const trees = JSON.parse(file);
        const {averageSize, averageDiameter} = avgSizes(trees);
        
        const formatData = [];
        const getNames = seeNames(trees);


        
        
        const allLinks = await getLinks(getNames);

        // console.log(allLinks)



        trees.forEach(async (tree) => {
            let diameter = tree.diametre_cime;
            let size = tree.hauteur_totale;
            
            for(const item of allLinks){
                if(tree.nom_complet == item.name){
                    tree.link = item.link;
                }
            }

            if(tree.nom_complet === "en cours de détermination") {
                tree.link = "No link for this tree"
            }

            if (size == null) {
                size = averageSize;
                tree.hauteur_totale = size;
            }

            if (diameter == null) {
                diameter = averageDiameter;
                tree.diametre_cime = diameter;
            }

            if (!tree.geoloc) {
                return;
            }


            // let link = await fetchData(tree.nom_complet)
            tree.value = Math.round(size * diameter);
            tree.owner = "";
            tree.name = "";
            tree.locked = false;
            tree.price = tree.value;
            tree.lat = tree.geoloc.lat;
            tree.lon = tree.geoloc.lon;
            tree.comments = [];
            
            delete tree.y_lambert72;
            delete tree.arbotag;
            delete tree.date_donnees;
            delete tree.x_lambda;
            delete tree.x_lambert72;
            delete tree.y_phi;
            delete tree.circonf;
            delete tree.geoloc;

            formatData.push(tree);
        });
          console.log("Writting new file...");
          const stringData = await JSON.stringify(formatData, 2);
          await writeFile(targetFile, stringData);
          console.log("Done");
    } catch (error) {
        console.log(error);
    }
};




const avgSizes = (trees) => {
    let totalSize = 0;
    let totalDiameter = 0;
    let i = 0;

    trees.forEach((tree) => {
        totalSize += tree.hauteur_totale;
        totalDiameter += tree.diametre_cime;
        i++;
    });

    const averageSize = Math.round(totalSize / i);
    const averageDiameter = Math.round(totalDiameter / i);

    return {averageSize, averageDiameter};
};







// const addLinks = (getNames) =>{
   
//     console.log(getNames)
//     return getNames

// }
getFile();

