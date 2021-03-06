import React from 'react'
import './App.css'
import Store from './dummy-store'
import Main from './Main'
import { Route, Switch, Link } from 'react-router-dom'
import FolderView from './FolderView'
import NoteView from './NoteView'

function App() {
  const state = Store

  return (
    <>
      <header>
        <Link to="/">
          <h1>Noteful</h1>
        </Link>
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Main {...state} />} />
          <Route
            path="/folder/:id"
            render={({ match, location, history }) => (
              <FolderView
                {...state}
                match={match}
                location={location}
                history={history}
              />
            )}
          />
          <Route
            path="/note/:id"
            render={({ match, location, history }) => (
              <NoteView
                {...state}
                match={match}
                location={location}
                history={history}
              />
            )}
          />
        </Switch>
      </div>
    </>
  )
}

export default App
