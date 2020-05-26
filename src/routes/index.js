import React from 'react'

import { Switch } from 'react-router-dom'
import Route from './Route'

import Signin from 'views/SignIn'
import Category from 'views/Category'
import CategoryForm from 'views/Category/form'
import ChooseCompany from 'views/ChooseCompany'

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/choose-company" exact isPrivate isChooseCompany component={ChooseCompany} />
        <Route name="category-edit" path="/category/edit/:id" exact isPrivate component={CategoryForm} />
        <Route path="/category" exact isPrivate component={Category} />
        
          {/* <Route path="/admin" isPrivate component={Admin} /> */}
          {/* <Route path="/rtl" component={RTL} /> */}
          <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  )
}
