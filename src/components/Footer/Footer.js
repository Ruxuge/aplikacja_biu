import React from 'react'
import "./Footer.scss"

export default function Footer(){
    return(
        <footer className="footer">
            <hr className="line"/>
            <br/>
            <div className="footer-links">
                <a href="/guidelines"> Guidelines |</a>
                <a href="/faq"> FAQ |</a>
                <a href="/lists"> Lists |</a>
                <a href="https://github.com/HackerNews/API"> API |</a>
                <a href="/security"> Security |</a>
                <a href="/legal"> Legal |</a>
                <a href="https://www.ycombinator.com/apply/"> Apply to YC |</a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=s19375@pjwstk.edu.pl"> Contact</a>
            </div>
            <br/>
            <div className="footer-form">
                <form>
                    <label htmlFor="fsearch">Search: </label>
                    <input type="search" id="fsearch" name="fsearch"/><br/>
                </form>
            </div>
            <br/>
        </footer>
    );
}
