import React from 'react'
import "./Show.scss"
import useGet from "../../hooks/useGet";
import Topicality from "../Topicality/Topicality";

export default function Show() {
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