import React, { useState, useEffect } from "react";
// import notes from '../assets/data'
import Listitem from "../components/Listitem.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddButton from "../components/AddButton.js";

const Notespage = () => {
  let [notes, setState] = useState([]); //setting the state
  //Using useEffect hook which takes a function and an empty array which tells there are no dependecies and this function is fired only on first load
  useEffect(() => {
    getnotes();
  }, []);
  //getnotes which is making an api call using async await
  let getnotes = async () => {
    let response = await fetch("http://localhost:5000/notes");
    let data = await response.json();

    setState(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <Listitem key={index} note={note} />
        ))}
      </div>
     
     
    <AddButton/>
    </div>
  );
};

export default Notespage;
