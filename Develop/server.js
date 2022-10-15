const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();



app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

const { notes } = require('./db/notes');


