import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page1 from '../views/Page1'
import NotFound from '../views/404'

const Content = () => (
  <div>
    <Switch>
      <Route exact path='/'>
        <Page1 />
      </Route>
      <Route path='/page1'>
        <Page1 />
      </Route>
      <Route path='/*'>
        <NotFound />
      </Route>
    </Switch>
  </div>
)
export default Content
