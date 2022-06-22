import React from 'react'
import {
    Link
    } from "react-router-dom";
  
let getTitle=(note)=>{
    console.log(note);
    console.log(note.body);
let title = note.body.split("\n")[0];   //get before first line end
console.log(title);
if(title.length<45)
return title;

return title.slice(0,45);
}
let getTime=(note)=>{
   return new Date(note.updatedAt).toLocaleDateString();
}
let getContent=(note)=>{
let title=getTitle(note);
let content = note.body.replaceAll('\n'," ");

content =content.replaceAll(title,"");
if(content.length>45){
    return content.slice(0,45)+"...";
}
else{
    return content;
}
}
const Listitem = ({note}) => {
    return (
        <Link to={`/${note._id}`}>
        <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p><span>{getTime(note)}</span>{getContent(note)}</p>
        </div>
        </Link>
    )
}

export default Listitem
