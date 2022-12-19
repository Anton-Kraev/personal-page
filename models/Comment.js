const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {type: String, required: true},
  text: {type: String, required: true},
  date: {type: String, required: true, unique: true}
})

module.exports = model('Comment', schema);