import React,{useContext,useState} from 'react'
import {NotesContext} from '../context/NotesContext'
import Notes from './Notes'
const NotesList = () =>{
  const [notes,setNotes]=useContext(NotesContext);
    return (
     <div>
      {notes.map(e=>
       <Notes note={e.note}/>
        )}
     </div>
    );
}
export default NotesList;