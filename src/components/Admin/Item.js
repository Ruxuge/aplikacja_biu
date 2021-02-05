import React from 'react';
import useGet from "../../hooks/useGet";
import StoryForm from "./Forms/StoryForm";
import CommentForm from "./Forms/CommentForm";
import JobForm from "./Forms/JobForm";

export default function Item({ idNumber, visibleItem }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})

    const type = item.type;

    return (
        <>
            {visibleItem &&
            <article>
                <p>{type}</p>

                {type === "comment" && <CommentForm idNumber={idNumber}/>}
                {type === "story" && <StoryForm idNumber={idNumber}/>}
                {type === "job" && <JobForm idNumber={idNumber} />}

            </article>}
        </>
    )
}