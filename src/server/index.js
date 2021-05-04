import express from "express";
import path from "path";
import {dbConnection} from './database/config';
require('dotenv').config()
// import router from './routes/UsersRoutes'

const PORT = process.env.APP_PORT

const app = express();

dbConnection()

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(express.json())

//Routes
app.use("/api/users", require("./routes/UsersRoutes"))


//Server
app.listen(PORT, () =>
    console.log(`🚀 Server is listening on port ${PORT}.`),
);