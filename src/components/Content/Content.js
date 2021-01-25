import React from 'react'
import './Content.scss'
import News from './Content'
import { BrowserRouter as Router} from "react-router-dom";

export default function Content(){
    return(
        <section>
            <Router path='/news' component={News}/>
        </section>

    )
}
