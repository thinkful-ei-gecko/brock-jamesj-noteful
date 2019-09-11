import React from 'react'
import Note from './NoteFolder/Note'

export default function NoteView(props) {
  const filteredFolder = notes => {
    let selectedNote = notes.find(note => note.id === props.match.params.id)
    console.log(selectedNote)
    return selectedNote ? selectedNote.folderId : ''
  }

  const filteredFolderItem = (id, folders) => {
    let folderObj = folders.find(folder => folder.id === id)
    return folderObj ? folderObj.name : ''
  }

  const FilteredNote = (notes, id) => {
    return notes.find(note => note.id === id)
  }

  return (
    <>
      <section className="SideBar">
        <button>Go Back</button>
        <h2 className="sidebar-folder-selected">
          {filteredFolderItem(filteredFolder(props.notes), props.folders)}
        </h2>
      </section>
      <section className="Main">
        <ul>
          <Note {...FilteredNote(props.notes, props.match.params.id)} />
        </ul>
      </section>
    </>
  )
}
