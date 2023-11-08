const express = require('express');
const path = require('path');
const noteRouter = require('./routes/notes')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', noteRouter);


app.use(express.static('public'));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

