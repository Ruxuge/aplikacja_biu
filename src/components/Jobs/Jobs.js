import React from 'react'
import "./Jobs.scss"
import useGet from "../../hooks/useGet";
import Job from "./Job";

export default function Jobs() {
    const URI = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty';
    const jobs = useGet(URI, []);

    return (
        <article>
            <ul>
                {jobs.map(jobId => (
                    <Job jobId={jobId} />
                ))}
            </ul>
        </article>
    );
}