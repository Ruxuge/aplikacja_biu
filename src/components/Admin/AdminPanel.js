import React from "react";
import "./Comment.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function AdminForms( ) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${Id}.json?print=pretty`;
    const news = useGet(URI, {});
    //const added = useAddedAgo(comment.time);

    return (
        <li>
            <form>
                <label>Insert id od item which you want edit:</label>
                <input type="text"/>
            </form>
            <form>
                <input>{news.title}</input>
                <textarea>{news.text}</textarea>
                <input>{news.url}</input>
            </form>
        </li>
    );
}