import React from "react";
import './app.scss'

import MenuBar from './components/MenuBar/MenuBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
      <div className="App">
        <Router>
          <MenuBar/>
          <Content/>
          <Footer/>
        </Router>
      </div>
    )
}

export default App;
