import React from 'react';
import './App.css';
import Store from './dummy-store'
import FolderList from './FileFolder/FolderList'

function App() {

  const state = Store;
  //console.log(state)

  return (
    <div className="App">
      <header>
        Noteful
      </header>
      <div>
        <FolderList {...state}/>
      </div>
    </div>
  );
}

export default App;