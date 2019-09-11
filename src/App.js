import React from 'react'
import './App.css'
import Store from './dummy-store'
import Main from './Main'
import { Route, Switch } from 'react-router-dom'
import FolderView from './FolderView'

function App() {
  const state = Store

  return (
    <div className="App">
      <header>Noteful</header>
      <Switch>
        <Route exact path="/" render={() => <Main {...state} />} />
        <Route
          path="/folder/:id"
          render={({ match, location, history }) => (
            <FolderView {...state} match={match} location={location} history={history} />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
