//this would contain the info about the specific note that we r having

//a tag in html is replaced by a link in the react app
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from "../assets/arrow.svg";
function NoteMine({ match, history }) {
  console.log("called");
  const noteId = match.params.id;
  console.log(noteId);
  let [note, setNote] = useState(null);

  //dependency is note_id so whenever note_id changes useEffect will be fired
  // //finding the node with id note_id
  // let note =notes.find(note=>note.id==noteId);

  useEffect(() => {
    getNote();
    console.log("fired");
    console.log(note);
  }, [noteId]);

  // getnotes which is making an api call using async await
  let getNote = async () => {
    if (noteId == "new") return;
    let response = await axios.get(`notes/${noteId}`);
 
    const [data] = response.data;
    // console.log(data)
    setNote(data);
    console.log(note);
  };
  let createNote = async () => {
    await axios.post("notes/", {
      body: note.body,
    });
    history.push("/");
  };

  let updateNote = async () => {
    const resp = await axios.put(`notes/${noteId}`, {
      // body:JSON.stringify({...note,updatedAt:new Date()})

      _id: note._id,
      body: note.body,
      createdAt: note.createdAt,
      updatedAt: new Date(),
    });
    console.log(resp.data);
  };
  let deleteNote = async () => {
    await axios.delete(`notes/${noteId}`, {
      // method:'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history.push("/");
  };
  let handleSubmit = () => {
    //when we press arrow key and if we cleared all data we want to delete this note
    if (noteId != "new" && !note.body) {
      deleteNote();
    } else if (noteId != "new") updateNote();
    else if (noteId == "new" && note != null) {
      createNote();
    }
    history.push("/");
  };
  return (
    <div className="note">
      <div className="note-header">
        {/* icon */}
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {/* when we r creating a new note we dont want delete button  */}
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
}

export default NoteMine;
