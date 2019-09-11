import React from 'react'
import FolderList from './FileFolder/FolderList'
import NoteList from './NoteFolder/NoteList'

export default function Main(props) {
  return (
    <>
    <section className="SideBar">
      <FolderList {...props} />
    </section>
    <section className="Main">
      <NoteList {...props} />
    </section>      
    </>
  )
}
