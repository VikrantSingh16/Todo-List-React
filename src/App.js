import './App.css';
import Nav from './components/Nav'
import AddNotes from "./components/AddNotes";
import NotesList from './components/NotesList'
import {NotesProvider} from "./context/NotesContext"
function App() {
  return (

  <NotesProvider>
    <div className="App">
     <Nav/>
     <AddNotes/>
   <NotesList/>
   
    </div>
    
    </NotesProvider>
   
  );
}

export default App;
