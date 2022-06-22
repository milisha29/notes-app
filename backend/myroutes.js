const express = require("express");
const router = express.Router();
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("./controllers/controller");


router.route("/").post(createNote).get(getNotes);
router.get("/:id",getNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote)

module.exports = router;
