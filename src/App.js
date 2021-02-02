import React from "react";
import "./app.scss"

import MenuBar from "./components/Static/MenuBar/MenuBar";
import Content from "./Content/Content";
import Footer from "./components/Static/Footer/Footer";

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
