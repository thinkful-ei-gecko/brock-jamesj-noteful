import React from 'react'
import FolderList from './FileFolder/FolderList'
import NoteList from './NoteFolder/NoteList'

export default function Main(props) {
  return (
    <>
      <FolderList {...props} />
      <NoteList {...props} />
    </>
  )
}
