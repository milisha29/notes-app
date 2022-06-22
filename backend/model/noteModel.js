//chat model mai:
//chatName
//users
//isGroupchat
//group admin
//latest msg
const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    body: { type: String }
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model("Note",NoteSchema); //schema is compiled into model
//models are fancy constructors compiled from schema .AN instance of model is a document
module.exports = Note;
