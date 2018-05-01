import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BooksList from '../Pages/BooksList';
import AdminDashboard from '../Admin/AdminDashboard';
import RequireAuth from '../Auth/RequireAuth';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import Page404 from '../Pages/Page404';

const Main = () => (
  <main className="app-main">
    <Switch>
      <Route exact path='/' component={BooksList} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signout' component={SignOut} />

      <Route path='/dashboard' component={RequireAuth(AdminDashboard)} />

      <Route component={Page404}/>
    </Switch>
  </main>
)

export default Main