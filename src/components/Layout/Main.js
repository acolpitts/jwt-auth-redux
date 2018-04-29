import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home';
import BooksList from '../Pages/BooksList';
import Dashboard from '../Admin/Dashboard';

const Main = () => (
  <main className="app-main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/books' component={BooksList} />
    </Switch>
  </main>
)

export default Main