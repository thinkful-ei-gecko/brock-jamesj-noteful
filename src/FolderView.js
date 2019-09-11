import React from 'react'
import NoteList from './NoteFolder/NoteList'
import FolderList from './FileFolder/FolderList'

export default function FolderView(props) {
  // TODO - Handle broken state when folder ID is invalid

  const filteredFolder = (folders) => {
    return folders.find(folder => folder.id === props.match.params.id)
  }

  const filteredNotes = (notes) => {
    return notes.filter(note => note.folderId === props.match.params.id)
  }

  return (
    <>
      <section className="SideBar">
        <FolderList {...props}
        selected={filteredFolder(props.folders)} />
      </section>
      <section className="Main">
        <NoteList notes={filteredNotes(props.notes)} />
      </section>
    </>
  )
}
