'use strict';

const express = require('express');
const router = express.Router();

const movies = [

  {
    title: 'Star Wars IV',
    year: 1977
  },
  {
    title: 'Star Wars V',
    year: 1980
  },
  {
    title: 'Star Wars VI',
    year: 1983
  },
];


router.get('/', (req, res) => {
  res.json(movies);
});


module.exports = router;