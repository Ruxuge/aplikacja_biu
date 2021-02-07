import React from "react";
import useGet from "../../hooks/useGet";

export default function CommentsKids({ commentKidId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${commentKidId}.json?print=pretty`;
    const commentKid = useGet(URI, {});

    return (
        <section>
            <li>
                <p>Author: {commentKid.by}</p>
                <p>{commentKid.text}</p>
            </li>
        </section>
    );
}