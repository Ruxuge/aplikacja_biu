import React from "react";
import './app.scss'

import MenuBar from './components/MenuBar/MenuBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch} from "react-router-dom"

export default function App() {
  return (
      <div className="App">
        <Router>
          <MenuBar/>
          <Switch>
            <Content/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
}
