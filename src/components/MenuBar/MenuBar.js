import React from "react";
import './MenuBar.scss';
import { Link } from "react-router-dom";

export default function MenuBar() {
    return (
        <nav className='menu-bar'>
            <aside className='menu-options'>
                <Link to='/'>Y</Link>
                <Link to='/news'>Hacker News</Link>
                <Link>news |</Link>
                <Link>past |</Link>
                <Link>comments |</Link>
                <Link>ask |</Link>
                <Link>show |</Link>
                <Link>jobs |</Link>
                <Link>submit</Link>
            </aside>
            <aside className='menu-login'>
                <Link>login</Link>
            </aside>
        </nav>
    );
}