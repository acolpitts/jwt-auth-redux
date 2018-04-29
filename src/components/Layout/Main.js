import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BooksList from '../Pages/BooksList';

const Main = () => (
  <main className="app-main">
    <Switch>
      <Route exact path='/' component={BooksList}/>
    </Switch>
  </main>
)

export default Main