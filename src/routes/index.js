import React from 'react'

import { Switch } from 'react-router-dom'
import Route from './Route'

import Auth from '../layouts/Auth'
import Admin from '../layouts/Admin'
import RTL from '../layouts/RTL'

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Auth} />
          <Route path="/admin" isPrivate component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  )
}
