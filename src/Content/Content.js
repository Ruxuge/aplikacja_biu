import React from 'react'
import "./Content.scss"

import New from "../components/New/New";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Submit from "../components/Submit/Submit"
import Welcome from "../components/Welcome/Welcome";
import Past from "../components/Past/Past"
import Comments from "../components/Comments/Comments"
import Ask from "../components/Ask/Ask"
import Show from "../components/Show/Show"
import Jobs from "../components/Jobs/Jobs"


import { Route } from "react-router-dom";

export default function Content() {
    return (
        <section className='content-section'>
            <Route path='/welcome' component={Welcome}/>
            <Route path='/new' component={New}/>
            <Route path='/past' component={Past}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/ask' component={Ask}/>
            <Route path='/show' component={Show}/>
            <Route path='/jobs' component={Jobs}/>
            <Route path='/submit' component={Submit}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>
        </section>
    );
}