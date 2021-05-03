import express from "express";
import path from "path";
require('dotenv').config()

const PORT = process.env.APP_PORT

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(PORT, () =>
    console.log(`🚀 Server is listening on port ${PORT}.`),
);
