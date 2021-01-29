import React, {useState} from "react";
import "./app.scss"

import MenuBar from "./components/MenuBar/MenuBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch} from "react-router-dom"
import Login from "./components/Login/Login";


export default function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

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
