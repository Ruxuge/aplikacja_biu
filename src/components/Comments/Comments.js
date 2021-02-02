import React from 'react'
import "./Comments.scss"
import useGet from "../../hooks/useGet";
import Comment from "./Comment";

export default function Comments() {
    const URI = 'https://hacker-news.firebaseio.com/v0/comments.json?print=pretty';
    const comments = useGet(URI, []);

    return (
        <article>
            <ul>
                {comments.map(commentId => (
                    <Comment commentId={commentId} />
                ))}
            </ul>
        </article>
    );
}