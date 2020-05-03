import React from 'react'

import { Switch } from 'react-router-dom'
import Route from './Route'

import Signin from 'views/SignIn'
import Category from 'views/Category'
import ChooseCompany from 'views/ChooseCompany'

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/choose-company" isPrivate isChooseCompany component={ChooseCompany} />
        <Route path="/category" isPrivate component={Category} />
          {/* <Route path="/admin" isPrivate component={Admin} /> */}
          {/* <Route path="/rtl" component={RTL} /> */}
          <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  )
}
