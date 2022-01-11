//Page dependencies/requirements
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

//Require the notes object that is being used
const { notes } = require('../../db/db.json');

//npm for unique id; const id = generateUniqueId(); 
const generateUniqueId = require('generate-unique-id');
const id = generateUniqueId()

//Read Notes (GET)
router.get('/notes', (req, res) => {    

    res.json(notes);

});

//Create Note (POST)
router.post('/notes', (req, res) => {

    const newNote = req.body;
    
    req.body.id = generateUniqueId();

    console.log(newNote);

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),JSON.stringify(notes, null, 2));

    res.json(newNote);

});

module.exports = router;
