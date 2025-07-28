const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  title: String,
  audioUrl: String,
  text: String,
  tags: [String]
});

module.exports = mongoose.model('Chapter', ChapterSchema);