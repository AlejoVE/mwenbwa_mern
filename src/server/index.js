import express from "express";
import path from "path";
import {dbConnection} from './database/config';
require('dotenv').config()

const PORT = process.env.APP_PORT

const app = express();

dbConnection()

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(express.json())

//Routes
app.use("/api/users", require("./routes/UsersRoutes"))
app.use("/api/trees", require("./routes/TreesRoutes"))


//Server
app.listen(PORT, () =>
    console.log(`🚀 Server is listening on port ${PORT}.`),
);