import React from "react";
import "./Job.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Job({ jobId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${jobId}.json?print=pretty`;
    const job = useGet(URI, {});
    //const time = useAddedAgo(job.time)

    return (
        <li>
            <p>{job.title}</p>
        </li>
    );
}