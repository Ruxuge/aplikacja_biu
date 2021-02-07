import React from "react";
import "../Comments/Comment.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function ThisComment({ commentId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`;
    const comment = useGet(URI, {});
    const added = useAddedAgo(comment.time);

    return (
        <li>
            <p>{comment.text}</p>
        </li>
    );
}