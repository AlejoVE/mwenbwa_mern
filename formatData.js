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

const getFile = async () => {
    try {
        const file = await readFile(filetPath, "utf-8");
        const trees = JSON.parse(file);
        const {averageSize, averageDiameter} = avgSizes(trees);

        const formatData = [];

        const getNames = seeNames(trees);

        const links = [];

        getNames.forEach(async (name) => {
            if (name === "en cours de détermination") {
                return;
            }

            const link = await fetchData(name);
            links.push({name, link});
        });

        trees.forEach(async (tree) => {
            let diameter = tree.diametre_cime;
            let size = tree.hauteur_totale;

            links.forEach((link) => console.log({link}));

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

            tree.value = Math.round(size * diameter);
            tree.owner = "";
            tree.name = "";
            tree.locked = false;
            tree.price = tree.value;
            tree.lat = tree.geoloc.lat;
            tree.lon = tree.geoloc.lon;
            tree.comments = [];
            // tree.link = link;
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

        //   console.log("Writting new file...");
        //   const stringData = await JSON.stringify(formatData, 2);
        //   await writeFile(targetFile, stringData);
        //   console.log("Done");
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

const seeNames = (trees) => {
    const names = [];
    trees.forEach((tree) => {
        const name = tree.nom_complet;
        if (names.includes(name)) {
            return;
        }

        names.push(name);
    });

    return names;
};

getFile();
