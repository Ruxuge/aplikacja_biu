import React from 'react';
import useGet from "../../hooks/useGet";
import storyForm from "./Forms/storyForm";
import commentForm from "./Forms/commentForm";
import jobForm from "./Forms/jobForm";

export default function Item({ idNumber, visibleItem }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})

    const type = item.type;

    return (
        <>
            {visibleItem &&
            <form>
                <p>{type}</p>

                {type === "comment" && <commentForm/>}
                {type === "story" && <storyForm/>}
                {type === "job" && <jobForm/>}

            </form>}
        </>
    )
}