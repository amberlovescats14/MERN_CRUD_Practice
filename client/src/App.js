import React, { Fragment, useState} from 'react';
import {BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Router from './Router'
import Footer from './components/footer/Footer'


function App() {

  return (
    <BrowserRouter>
    <Fragment>
      <Nav/>
      <Router/>
      <Footer/>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
