import React from 'react'
import { Route } from "react-router-dom";
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
import Discuss from "../components/Comments/Discuss";
import AdminPanel from "../components/Admin/AdminPanel";

import { useAuth } from "../Authorization/CreateAuthProvider"

export default function Content() {
    const [logged] = useAuth();
    return (
        <section className='content-section'>

                    {!!logged && <>
                        <Route path='/new' component={New}/>
                        <Route path='/past' component={Past}/>
                        <Route path='/comments' component={Comments}/>
                        <Route path='/ask' component={Asks}/>
                        <Route path='/show' component={Shows}/>
                        <Route path='/jobs' component={Jobs}/>
                        <Route path='/submit' component={Submit}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/discuss' component={Discuss}/>
                        </>}


                    {logged && <>
                        <Route path='/welcome' component={Welcome}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/admin_panel' component={AdminPanel}/>
                    </>}

        </section>
    );
}