const router = require('express').Router()
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { stringify } = require('querystring');


router.get('/notes', (req, res) => {
    const savedNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    res.json(savedNotes)
});


router.post('/notes', (req, res) => {
    const savedNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    savedNotes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes))
    res.json({ message: "note was saved woohoo" })
});

module.exports = router;