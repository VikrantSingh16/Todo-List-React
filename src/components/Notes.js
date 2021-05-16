import React from 'react'
import '../App.css'
const Notes = (props)=>{
    return (
        <div className="notes">
        ✰ {props.note}
        </div>
    );
}
export default Notes;