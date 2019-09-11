import React from 'react'
import Folder from './FileFolder/Folder'
import Note from './NoteFolder/Note';

export default function NoteView(props) {

    const filteredFolder = (notes) => {
        let selectedNote = notes.find(note => note.id === props.match.params.id)
        console.log(selectedNote)
        return selectedNote.folderId
    }

    const filteredFolderItem = (id, folders) => {
        
        return folders.find(folder => folder.id === id)
    }

    const FilteredNote = (notes, id) => {

        return notes.find(note => note.id === id)
    }

    return (
        <>
            <button>Go Back</button>
            <Folder {...filteredFolderItem(filteredFolder(props.notes), props.folders)}/>
            <Note {...FilteredNote(props.notes, props.match.params.id)}/>
        </>
    )
}