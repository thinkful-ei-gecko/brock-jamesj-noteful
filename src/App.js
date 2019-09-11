import React from 'react'
import './App.css'
import Store from './dummy-store'
import Main from './Main'
import { Route, Switch } from 'react-router-dom'

function App() {
  const state = Store

  return (
    <div className="App">
      <header>Noteful</header>
      <Switch>
        <Route exact path="/" render={() => <Main {...state} />} />
      </Switch>
    </div>
  )
}

export default App
