var mongoose = require('mongoose');
require('dotenv').config();

const { MONGOURI } = process.env;

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = { mongoose };