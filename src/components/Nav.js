import React, { useContext } from 'react'
import {NotesContext} from '../context/NotesContext'
const Nav = () =>{
  const [notes,setNotes]=useContext(NotesContext);
  return (

<center><h1> To Do List 🔥🔥</h1></center>
  );
}
export default Nav;