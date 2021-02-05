import React from "react";
import "./Show.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Show({ showId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${showId}.json?print=pretty`;
    const show = useGet(URI, {});

    const timeNotNull = () => show !== null ? show.time : 0;
    const time = useAddedAgo(timeNotNull())


    const [hide, setHide] = React.useState(false);
    const [vote, setVote] = React.useState(false);


    return <>
        {!hide && <li className="list">
            {show!== null &&
            <main className='post'>
                <div className='arrow'
                     onClick={() => setVote(true)}
                     style={{opacity: vote ? 0 : 1}}
                />
                <div className="content">
                    <a href={show.url}>{show.title}</a>
                    <p>{show.score} {show.score === 1 ? 'point' : 'points'} by {show.by} {time} |&nbsp;
                        <span
                            onClick={() => setVote(false)}
                            style={{display: vote ? 'inline-block' : 'none'}} >unvote | </span>
                        <span onClick={() => setHide(true)}>hide | </span>
                        <a href="">past | </a>
                        <a href="/discuss">discuss</a>
                    </p>
                </div>
            </main>}
        </li>}
    </>;
}