import React from 'react'
import "./Shows.scss"
import useGet from "../../hooks/useGet";
import Show from "./Show";

export default function Shows() {
    const URI = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';
    const shows = useGet(URI, []);


    return (
        <article>
            <ul>
                {shows.map(showId => (
                    <Show showId={showId} />
                ))}
            </ul>
        </article>
    );
}