import React from 'react'
import "./Content.scss"

import New from "../components/New/New";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Submit from "../components/Submit/Submit"
import Welcome from "../components/Welcome/Welcome";
import Past from "../components/Past/Past"
import Comments from "../components/Comments/Comments"
import Asks from "../components/Ask/Asks"
import Shows from "../components/Show/Shows"
import Jobs from "../components/Jobs/Jobs"


import { Route } from "react-router-dom";
import Discuss from "../components/Comments/Discuss";

export default function Content() {
    return (
        <section className='content-section'>
            <Route path='/welcome' component={Welcome}/>
            <Route path='/new' component={New}/>
            <Route path='/past' component={Past}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/ask' component={Asks}/>
            <Route path='/show' component={Shows}/>
            <Route path='/jobs' component={Jobs}/>
            <Route path='/submit' component={Submit}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/discuss' component={Discuss}/>
            <Route path='/item' component={Discuss}/>
        </section>
    );
}