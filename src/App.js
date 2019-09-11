import React from 'react'
import './App.css'
import Store from './dummy-store'
import FolderList from './FileFolder/FolderList'
import NoteList from './NoteFolder/NoteList'

function App() {
  const state = Store

  return (
    <div className="App">
      <header>Noteful</header>
      <div>
        <FolderList {...state} />
        <NoteList {...state} />
      </div>
    </div>
  )
}

export default App
