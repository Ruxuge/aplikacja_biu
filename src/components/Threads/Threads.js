import React from 'react'
import "./Threads.scss"
import useGet from "../../hooks/useGet";
import Topicality from "../New/Topicality";

export default function Threads() {
    const URI = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    const news = useGet(URI, []);

    return (
        <article>
            <ul>
                {news.map(topicalityId => (
                    <Topicality topicalityId={topicalityId} />
                ))}
            </ul>
        </article>
    );
}