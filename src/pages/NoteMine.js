//this would contain the info about the specific note that we r having

//a tag in html is replaced by a link in the react app
import React, {useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from "../assets/arrow.svg";
function NoteMine({ match,history}) {
  console.log('called');
  const noteId = match.params.id;
  console.log(noteId);
  let [note, setNote] = useState(null);
 
  //dependecy is note_id so whenever note_id changes useEffect will be fired
  // //finding the node with id note_id
  // let note =notes.find(note=>note.id==noteId);
 
  useEffect(() => {
    getNote();
    console.log("fired");
    console.log(note);

  }, [noteId]);
  
  // getnotes which is making an api call using async await
  let getNote = async () => {
    if(noteId=='new')return;
    let response = await fetch(`http://localhost:5000/notes/${noteId}`);
    let data = await response.json()
  
    setNote(data);
  }
  let createNote = async()=>{
await fetch('http://localhost:5000/notes/',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({...note,updated:new Date()})
});
history.push('/');
  }
  let updateNote=async()=>{
    await fetch(`http://localhost:5000/notes/${noteId}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
  },
    body:JSON.stringify({...note,updated:new Date()})
    })
  }
  let deleteNote =async()=>{
    await fetch(`http://localhost:5000/notes/${noteId}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)
    })
    history.push('/');
  }
  let handleSubmit=()=>{
    //when we press arrow key and if we cleared all data we want to delete this note
    if(noteId!='new' && !note.body){
        deleteNote();
    }
    else if(noteId!='new')
    updateNote();
    else if(noteId=='new' && note!=null){
      createNote();
    }
    history.push('/')
  }
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
        {(noteId!=='new')?(<button onClick={deleteNote}>Delete</button>):(<button onClick={handleSubmit}>Done</button>)}
        
      </div>
      <textarea onChange= {(e)=>{setNote({...note,body:e.target.value})}}value={note?.body}></textarea>
     
    </div>
  );
}

export default NoteMine;
