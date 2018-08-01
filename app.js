const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./src/middlewares/routes');

const app = express();

app.use(cookieParser());
app.use('/', routes);

module.exports = app;
