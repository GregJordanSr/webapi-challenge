const express = require("express");
const peopledb = require("./peopledb");
const choresdb = require("../chores/choresdb");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(peopledb);
});

module.exports = router;