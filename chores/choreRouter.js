const express = require('express');
const choresdb = require('../chores/choresdb');
const peopledb = require("../people/peopledb");


const router = express.Router();
   
choreId = 1;

router.get("/", (req, res) => {
    res.status(200).json(choresdb);
})

router.get("/:id", (req, res) => {
 
})

router.post("/", (req, res) => {
    const chore = req.body;
     chore.id = choreId;
     choreId = choreId + 1;
    choresdb.push(chore);
    res.status(201).json(choresdb);
})

router.put("/", (req, res) => {
    
})

router.delete("/:id", (req, res) => {
    
})


module.exports = router;