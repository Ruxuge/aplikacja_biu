import React from 'react'
import './Content.scss'
import News from './Content'
import { Route } from "react-router-dom";


export default function Content() {
    return (
        <section className='content-section'>
            <Route path='/news' component={News}/>
        </section>
    );
}