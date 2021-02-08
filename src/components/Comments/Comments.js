import React, { useState } from 'react'
import "./Comments.scss"
import Comment from "./Comment";
import axios from "axios";

export default function Comments() {

    let item = 2600
    const stateType = [];

    const [comments, setComments] = useState([]);

    function commentList() {
        for (let i = item; i >= item - 10; i--) {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`)
        .then(response => {
                if (response.data.type !== null && response.data.type === 'comment') {
                    setComments(response.data)
                    return response.data
                }
            })
                .catch(error => console.error("Error:${error}"))
        }
    }

    setComments(commentList())

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
