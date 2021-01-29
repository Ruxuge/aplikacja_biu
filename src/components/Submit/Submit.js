import React from 'react'
import "./Submit.scss"
import { Route } from "react-router-dom";

export default function Submit() {
    return (
        <section className='submit'>
            <Route path='/submit'/>
            <form>
                <label htmlFor="ftitle">Title: </label>
                <input type="text" id="ftitle" name="ftitle"/><br/><br/>

                <label htmlFor="furl">Url: </label>
                <input type="URL" id="furl" name="furl" />

                <p>or</p>

                <label htmlFor="ftext">Text: </label>
                <textarea id="ftext" name="ftext"/><br/><br/>

                <input type="submit" value="submit"/>
            </form>
            <p>
                Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.
            </p>
            <p>
                You can also submit via <a href="/bookmarklet" >bookmarklet</a>.
            </p>
        </section>
    );
}