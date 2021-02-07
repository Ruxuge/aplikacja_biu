import React, {useEffect, useState} from 'react'
import "./Profile.scss"
import { Route } from "react-router-dom";
import {authFetch} from "../../Authorization/CreateAuthProvider";

export default function Profile() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        authFetch('/posts')
            .then(r => r.json())
            .then(_posts => setPosts(_posts))
    }, []);



    return (
        <section className='profile'>
            <Route path='/profile'/>
            <>
                {posts.map(post => <div key={post.id}>
                    {post.message}
                </div>)}
            </>
            <form>
                <label htmlFor="fabout">About: </label>
                <input type="text" id="fabout" name="fabout"/><br/>

                <label htmlFor="femail">Email: </label>
                <input type="email" id="femail" name="femail"/><br/><br/>

                <label htmlFor="sshowdead">Showdead: </label>
                <select type="" id="sshowdead" name="sshowdead">
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <br/><br/>

                <label htmlFor="snoprocrast">Noprocrast: </label>
                <select  type="" id="snoprocrast" name="snoprocrast">
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <br/><br/>

                <label htmlFor="fmaxvisit">Maxvisit: </label>
                <input type="fmaxvisit" id="fmaxvisit" name="fmaxvisit"/><br/><br/>

                <label htmlFor="fminaway">Minaway: </label>
                <input type="fminaway" id="fminaway" name="fminaway"/><br/><br/>

                <label htmlFor="fdelay">Delay: </label>
                <input type="fdelay" id="fdelay" name="fdelay"/><br/><br/>

                <a href="">	change password</a><br/><br/>
                <a href="">	submissions</a><br/><br/>
                <a href="">comments</a><br/><br/>
                <a href="">hidden</a><br/><br/>
                <a href="">favorite submissions</a> / <a href="">comments</a> (shared) <br/><br/>

                <input type="submit" value="Update"/><br/><br/>
            </form>
        </section>
    );
}