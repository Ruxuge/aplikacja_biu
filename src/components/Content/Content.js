import React from 'react'
import "./Content.scss"

import New from "../New/New";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Submit from "../Submit/Submit"
import Welcome from "../Welcome/Welcome";
import Past from "../Past/Past"
import Comments from "../Comments/Comments"
import Ask from "../Ask/Ask"
import Show from "../Show/Show"
import Jobs from "../Jobs/Jobs"


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