const router = require('express').Router();
const path = require('path')
const notes = require('../../db/db.json');
const fs = require('fs');

//npm for unique id; const id = generateUniqueId(); 
const generateUniqueId = require('generate-unique-id');
const id = generateUniqueId()

//Read Notes (GET)
router.get('/notes', (req,res) => {    

    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

//Create Note (POST)
router.post('/notes', (req, res) => {

    const newNote = req.body;
    
    newNote.id = generateUniqueId();

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),JSON.stringify(notesArr, null, 2))

});

//Delete Note (DELETE)

module.exports = router;
