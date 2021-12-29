const router = require('express').Router();

const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) =>{
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set random id
    // req.body.id = function to create id

    
    // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
