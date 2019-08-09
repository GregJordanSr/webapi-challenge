const express = require('express');
const helmet = require("helmet");
const peopledb = require("../people/peopledb.js")
const choreRouter = require("../chores/choreRouter");
const peopleRouter = require("../people/peopleRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/people", peopleRouter);
server.use("/chores", choreRouter);


server.get("/", (req, res) => {
    res.status(200).json(peopledb);
});



module.exports = server;