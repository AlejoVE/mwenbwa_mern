import express from "express";
import path from "path";
import {dbConnection} from './database/config';
import {sendLeaves, removeLeaves} from './helpers/handleLeaves'
// const cors = require('cors')
require('dotenv').config()

const PORT = process.env.APP_PORT || 3000
const app = express();

dbConnection()
// app.use(cors({credentials: true, origin: 'http://127.0.0.1:5500'}));
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(express.json())




//Routes

app.use("/api/users", require("./routes/UsersRoutes"))
app.use("/api/trees", require("./routes/TreesRoutes"))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../bin/client/'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})


//Server
app.listen(PORT, () =>
console.log(`🚀 Server is listening on port ${PORT}.`),
);

setInterval(sendLeaves, 1000*60*15);
setInterval(removeLeaves, 1000*60*60);