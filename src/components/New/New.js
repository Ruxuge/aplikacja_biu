import React from 'react'
import "./New.scss"
import useGet from "../../hooks/useGet";
import Topicality from "../Topicality/Topicality";

export default function New() {
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