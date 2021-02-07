import React from "react";
import "./MenuBar.scss";
import { Link } from "react-router-dom";

export default function MenuBar() {
    return (
        <nav className='menu-bar'>
            <aside className='menu-options'>
                <Link className="ylogo" to='/'/>
                <Link to='/new'>Hacker News </Link>
                <Link to='/welcome'>welcome |</Link>
                <Link to='/new'>new |</Link>
                <Link to='/past'>past |</Link>
                <Link to='/comments'>comments |</Link>
                <Link to='/ask'>ask |</Link>
                <Link to='/show'>show |</Link>
                <Link to='/jobs'>jobs |</Link>
                <Link to='/submit'>submit</Link>
            </aside>
            <aside className='menu-login'>
                <Link to='/admin_panel'>admin panel | </Link>
                <Link to='/login'>login local | </Link>
                <a href="https://news.ycombinator.com/login"> login</a>
            </aside>
        </nav>
    );
}