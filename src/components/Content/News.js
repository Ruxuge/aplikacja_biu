import React from 'react'
import '../News.scss'
import useGet from '../../hooks/useGet';
import Topicality from './Topicality';

export default function News() {
    const URI = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty ';
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