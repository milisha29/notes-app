// const { deleteOne } = require("../model/noteModel");
const asyncHandler = require("express-async-handler");

const Note = require("../model/noteModel");


const getNotes =asyncHandler(async(req,res)=>{
const notes = await Note.find();
res.send(notes);

})
const getNote =asyncHandler(async(req,res)=>{
    const my_id = req.params.id;
    const note = await Note.find({_id:my_id});
    if(note)
    res.status(201).send(note);
    else{
        res.status(400);
        throw new Error("Note not found");
    }
})
const createNote =asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {body} =req.body;
    console.log(body);

    const note = await Note.create({body});
   console.log(note);
   console.log(note.body);
    if(note){
        res.status(201).json(
            {body:note.body}
        )
    }
    else{
        res.status(400);
    }
})

const updateNote =asyncHandler(async(req,res)=>{
const myid = req.params.id;
console.log(myid);
console.log(req.body);
// const body = req.body;
const updated = req.body;
const newNote = await Note.findByIdAndUpdate(myid,{body:updated.body,updatedAt:updated.updatedAt},{new:true});
console.log(newNote.body);
if(newNote){
    res.json(newNote);
}
})

const deleteNote =asyncHandler(async(req,res)=>{
    const myid = req.params.id;

    const del = await Note.deleteOne({_id:myid});
    if(del){
        res.status(201).json(del)
    }
})

module.exports ={getNotes,getNote,createNote,updateNote,deleteNote};