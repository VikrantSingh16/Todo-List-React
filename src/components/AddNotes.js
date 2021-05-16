import React,{useContext,useState} from 'react'
import {NotesContext} from '../context/NotesContext'
import TextField from '@material-ui/core/TextField';
import '../App.css'
import { Button } from '@material-ui/core';
const AddNotes=()=>{
  const [name,setName]=useState('');
  const [notes,setNotes]=useContext(NotesContext);

const updateName = e =>{
  setName(e.target.value);
};
const addNewNote = e =>{
  e.preventDefault();
  setNotes(prevNotes=>[...prevNotes,{note:name}]);

  setName('');
}
  return (
  <center>
  <form >
  <TextField type="text" name="name" placeholder="Take a note.." value={name} onChange={updateName} id="standard-basic" label="Take a note..." />
  <Button type="submit" style={{display:"none"}} variant="contained" onClick={addNewNote}>Add</Button>
    </form>
    <br></br>
    </center>
);
}
export default AddNotes;