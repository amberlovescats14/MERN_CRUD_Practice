const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3
  },
  text: {
    type: String,
    required: true,
    min: 4,
    
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Comments = mongoose.model('Comments', CommentsSchema)
module.exports = Comments