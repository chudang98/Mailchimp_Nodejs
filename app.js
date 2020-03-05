const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRoute = require('./routers/apiRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', apiRoute);

module.exports = app;
