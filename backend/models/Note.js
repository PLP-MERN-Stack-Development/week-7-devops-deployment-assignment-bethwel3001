const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
