import React from "react";
import "./Ask.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";

export default function Ask({ askId }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${askId}.json?print=pretty`;
    const ask = useGet(URI, {});

    const [hide, setHide] = React.useState(false);
    const [vote, setVote] = React.useState(false);

    const timeNotNull = () => ask !== null ? ask.time : 0;

    const time = useAddedAgo(timeNotNull())


    return <>
        {!hide && <li className="list">
            <main className='post'>
                <div className='arrow'
                     onClick={() => setVote(true)}
                     style={{opacity: vote ? 0 : 1}}
                />
                <div className="content">
                    <p>{ask.title}</p>
                    <p>{ask.score} {ask.score === 1 ? 'point' : 'points'} by {ask.by} {time} |&nbsp;
                        <span
                            onClick={() => setVote(false)}
                            style={{display: vote ? 'inline-block' : 'none'}} >unvote | </span>
                        <span onClick={() => setHide(true)}>hide | </span>
                        <a href="">past | </a>
                        <a href="/discuss">discuss</a>
                    </p>
                </div>
            </main>
        </li>}
    </>;
}