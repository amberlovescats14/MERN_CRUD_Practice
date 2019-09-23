import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Comments from './containers/CommentsContainer'
import Contact from './components/contact/Contact'
import ui from './components/ui/UI'

export default function Router() {
  return (
    <Switch>
      <Route exact strict path='/' component={Landing}/>
      <Route exact strict path='/comments' component={Comments}/>
      <Route exact strict path='/contact' component={Contact}/>
      <Route exact strict path='/UI-LandingPage' component={ui}/>
    </Switch>
  )
}

