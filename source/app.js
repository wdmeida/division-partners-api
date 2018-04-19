const express = require('express');
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json());

module.exports = app;
