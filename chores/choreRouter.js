const express = require('express');
const choresdb = require('../chores/choresdb');
const peopledb = require("../people/peopledb");


const router = express.Router();
   
choreId = 1;

router.get("/", (req, res) => {
    res.status(200).json(choresdb);
})

router.get("/:id", (req, res) => {

    const { id } = req.params;
    const chore = req.body;
    if (chore.id) {
        const getId =  choresdb.find( getId => chore.id == id);
        res.status(200).json(getId)
    } else {
        res.status(500).json({
            message: "That user does not exist"
        })
    }
})

router.post("/", (req, res) => {
    const chore = req.body;
    chore.id = choreId;
   
    if (chore) {
        choresdb.push(chore);
        res.status(201).json(choresdb);
        choreId++
    } else {
        res.status(500).json({
            message: "Missing information to needed or duplicate id "
        })
    }
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { description, notes, completed } = req.body;
    const findId = chore => {
      return chore.id == id;
    };
    const foundId = choresdb.find(findId);
    if (!foundId) {
      res.status(404).json({ message: 'No chore found by that ID'});
    } else {
      if (description) foundId.description = description;
      if (notes) foundId.notes = notes;
      if (completed) foundId.completed = completed;
      res.json(choresdb);
    }
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const foundChores = choresdb.find(chore => chore.id == id);

    if (foundChores) {
    const choreRemoved = { ...foundChores };
    chore = choresdb.filter(chore => chore.id != id);
    res.status(200).json(choresdb);
  
    } else {
    res.status(404).json({ message: "There was an error removing this chore" });
    }
})


module.exports = router;