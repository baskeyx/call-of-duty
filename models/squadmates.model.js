const { model, Schema } = require('mongoose');

const squadmates = model('squadmates', Schema({
  id: { type: String, unique: true, required: true },
  handle: { type: String, unique: true, required: true },
}));

module.exports = { squadmates };