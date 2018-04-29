import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home';
import BooksList from '../Pages/BooksList';
import AdminDashboard from '../Admin/AdminDashboard';
import RequireAuthentication from "./RequireAuthentication";

const Main = () => (
  <main className="app-main">
    <Switch>
      <Route path='/admin' component={RequireAuthentication(AdminDashboard)} />
      <Route exact path='/' component={BooksList} />
      <Route path='/books' component={BooksList} />
    </Switch>
  </main>
)

export default Main