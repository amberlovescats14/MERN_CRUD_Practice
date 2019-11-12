import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import Nav from './components/nav/Nav'
import Landing from './components/landing/Landing'
import Comments from './containers/CommentsContainer'
import Contact from './components/contact/Contact'
import Weather from './containers/WeatherContainer'

function App() {

  return (
    <BrowserRouter>
      <Nav>
      <Switch>
      <Route exact strict path='/' component={Landing}/>
      <Route exact strict path='/comments' component={Comments}/>
      <Route exact strict path='/contact' component={Contact}/>
      <Route exact strict path='/weather' component={Weather}/>
    </Switch>        
      </Nav>
    </BrowserRouter>
  );
}

export default App;
