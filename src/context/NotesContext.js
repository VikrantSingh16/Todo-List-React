import React,{useState,createContext} from 'react'
export const NotesContext = createContext();
export const NotesProvider = (props) => {
    const [notes,setNotes]=useState([
        {note:'Your todos will appear like this 😉'}
        
    ]);

return (
    <NotesContext.Provider value={[notes,setNotes]}>
        {props.children}
    </NotesContext.Provider>
);
}

