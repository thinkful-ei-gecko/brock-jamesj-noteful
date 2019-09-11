import React from 'react'
import Note from './Note'

export default function NoteList(props) {
//console.log(folder)
    const notes = props.notes.map(note => {
        return (
            <Note 
            key={note.id}
            name={note.name}
            id={note.id}
            />
        )
    });

    return (
        <ul>
            {notes}
        </ul>
    )
}

