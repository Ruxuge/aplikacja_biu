import React from "react";
import useGet from "../../hooks/useGet";
import CommentsKids from "./CommentsKids";

export default function ThisComment({ commentId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`;
    const comment = useGet(URI, {});

    const commentsKid = comment !== {} ? comment.kids : 0;


    return (
        <section>
            <article>
                <li>
                    <p>Author: {comment.by}</p>
                    <p>{comment.text}</p>
                </li>
            </article>
            {commentsKid !== undefined && <>
            <div>
                <ol>
                    {commentsKid.map(commentKidId => (
                        <CommentsKids commentKidId={commentKidId} />
                    ))}
                </ol>
            </div>
            </>}
        </section>
            );
}