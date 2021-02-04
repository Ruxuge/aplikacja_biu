import React from "react";
import "./Discuss.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";
import {Route} from "react-router-dom";

export default function Discuss({ comment }) {
    //const URI = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`;
    //const comment = useGet(URI, {});
    //const added = useAddedAgo(comment.time);

    return (
        <section>
        <Route path='/discuss'/>
            <div>

            </div>
            <form>
                <label htmlFor="discuss"></label>
                <textarea name="text" rows="6" cols="60"/><br/><br/>
                <input type="submit" value="add comment"/>
            </form>
        </section>

    );
}