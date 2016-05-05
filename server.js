'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const movies = require('./routes/movies');

app.use(express.static('./public'));

app.use('/api/movies', movies);



app.listen(PORT, () => console.log(`Server listening on ${PORT}`));