import React from 'react'
import Note from './Note'

export default function NoteList(props) {
//console.log(folder)
    const notes = props.notes.map(note => {
        return (
            <Note 
            key={note.id}
            {...note}
            />
        )
    });

    return (
        <ul>
            {notes}
        </ul>
    )
}

