import React from "react";
import "./Job.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Job({ jobId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${jobId}.json?print=pretty`;
    const job = useGet(URI, {});

    const timeNotNull = () => job !== null ? job.time : 0;

    const time = useAddedAgo(timeNotNull())

    return (
        <li>
            {job !== null &&
            <>
                <a href={job.url}>{job.title}</a>
                <p>{time}</p>
            </>
            }
        </li>
    );
}