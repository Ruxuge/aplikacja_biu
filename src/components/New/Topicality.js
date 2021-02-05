import React from "react";
import "./Topicality.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";
import Discuss from "../Comments/Discuss";
import {Link} from "react-router-dom";

export default function Topicality({ topicalityId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${topicalityId}.json?print=pretty`;
    const topicality = useGet(URI, {});

    const timeNotNull = () => topicality !== null ? topicality.time : 0;
    const time = useAddedAgo(timeNotNull())


    const [hide, setHide] = React.useState(false);
    const [vote, setVote] = React.useState(false);


    return <>
        {!hide && <li className="list">
            {topicality !== null &&
            <main className='post'>
                <div className='arrow'
                     onClick={() => setVote(true)}
                     style={{opacity: vote ? 0 : 1}}
                />
                <div className="content">
                    <a href={topicality.url}>{topicality.title}</a>
                    <p>{topicality.score} {topicality.score === 1 ? 'point' : 'points'} by {topicality.by} {time} |&nbsp;
                        <span
                            onClick={() => setVote(false)}
                            style={{display: vote ? 'inline-block' : 'none'}} > unvote | </span>
                        <span onClick={() => setHide(true)}>hide | </span>
                        <a href="">past | </a>
                        <Link to={`/item?id=${topicality.id}`}>discuss</Link>
                    </p>
                </div>
            </main>}
        </li>}
    </>;
}