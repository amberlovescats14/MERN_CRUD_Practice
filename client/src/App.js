import React, { Fragment} from 'react';
import {BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
    <Fragment>
      <Nav/>
      <Router/>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
