const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
     
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Question = mongoose.model('question', QuestionSchema);