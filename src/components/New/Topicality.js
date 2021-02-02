import React from "react";
import "./Topicality.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Topicality({ topicalityId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${topicalityId}.json?print=pretty`;
    const topicality = useGet(URI, {});
    const time = useAddedAgo(topicality.time);

    const [hide, setHide] = React.useState(false);

    return (
        <>
            {!hide && <li className="list">
                <main className='post'>
                    <div className='arrow'/>
                    <div className="content">
                        <a href={topicality.url}>{topicality.title}</a>
                        <p>{topicality.score} {(topicality.score === 1) ? 'point' : 'points'} by {topicality.by} {time} |&nbsp;
                            <span onClick={() => setHide(true)}>hide</span> |&nbsp;
                            <a href="">past</a> |&nbsp;
                            <a href="">discuss</a>
                        </p>
                    </div>
                </main>
            </li>}
        </>
    );
}
