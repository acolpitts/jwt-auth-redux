import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BooksList from '../Pages/BooksList';
import AdminDashboard from '../Admin/AdminDashboard';
import RequireAuth from "../Auth/RequireAuth";
import SignIn from "../Auth/SignIn";

const Main = () => (
  <main className="app-main">
    <Switch>
      <Route exact path='/' component={BooksList} />
      <Route path='/signin' component={SignIn} />
      <Route path='/dashboard' component={RequireAuth(AdminDashboard)} />
    </Switch>
  </main>
)

export default Main