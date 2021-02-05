import React from 'react'
import "./Asks.scss"
import useGet from "../../hooks/useGet";
import Ask from "./Ask";

export default function Asks() {
    const URI = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
    const asks = useGet(URI, []);

    return (
        <article>
            <ul>
                {asks.map(askId => (
                    <Ask askId={askId} />
                ))}
            </ul>
        </article>
    );
}