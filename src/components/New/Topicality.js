import React from "react";
import "./Topicality.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Topicality({ topicalityId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${topicalityId}.json?print=pretty`;
    const topicality = useGet(URI, {});
    const time = useAddedAgo(topicality.time);

    return (
        <li className="list">
            <img src="../../files/grayarrow.gif" alt="arrow"/><a href={topicality.url}>{topicality.title}</a>
            <p>{topicality.score} {(topicality.score === 1) ? 'point' : 'points'} by {topicality.by} {time} | <a href="">hide</a> | <a href="">past</a> | <a href="">discuss</a></p>
        </li>
    );
}