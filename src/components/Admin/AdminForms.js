import React from "react";
import "./Comment.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function AdminForms({ Id }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${Id}.json?print=pretty`;
    const news = useGet(URI, {});
    //const added = useAddedAgo(comment.time);

    return (
        <li>
            <form>
                <input>news.title</input>
                <textarea>news.text</textarea>
                <input>news.url</input>
            </form>
        </li>
    );
}