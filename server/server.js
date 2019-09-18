const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const API = require('../api/api');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.post('/session', async (req, res) => {
  const body = req.body;
  const result = await API.post('/web/session', body);

  return res.json(result.data);
});

app.listen(3000, () => {
console.log('spendit bff app listening on port 3000');
});

module.exports = app;