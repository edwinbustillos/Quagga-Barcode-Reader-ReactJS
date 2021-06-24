import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <div className='App'>
    <Router>
      <Header/>
      <Content/>
      <Footer/>
    </Router>
  </div>
)

export default App
