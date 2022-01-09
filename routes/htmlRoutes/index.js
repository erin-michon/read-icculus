//Page Dependencies
const express = require('express');
const path = require('path');
const router = require('express').Router();

//Router to get/send html files for index (home page)
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//Router to get/send html files for notes (user edit/add notes page)
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;