const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter = require('./routes/movieRouter')
const genreRouter = require('./routes/genreRouter')


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/

app.use('/api/movie', movieRouter)
app.use('/api/genre', genreRouter)
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});