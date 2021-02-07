import React from "react";
import "./Topicality.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";
import {Link} from "react-router-dom";

export default function Topicality({topicalityId}) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${topicalityId}.json?print=pretty`;
    const topicality = useGet(URI, {});

    const timeNotNull = () => topicality !== undefined ? topicality.time : 0;
    const scoreNotNull = () => topicality !== null ? topicality.score : 0;

    const time = useAddedAgo(timeNotNull());

    const scoreRef = React.useRef(null);

    function reducer(state, action) {
        switch (action.type) {
            case 'VOTE':
                return {
                    ...state,
                    vote: true,
                    score: scoreRef.current + 1
                }
            case 'UNVOTE':
                return {
                    ...state,
                    vote: false,
                    score: state.score - 1
                }
            case 'HIDE':
                return {
                    ...state,
                    hide: true
                }
            default:
                throw new Error();
        }
    }

    React.useEffect(() => {
        scoreRef.current = scoreNotNull()
    }, [scoreRef.current, scoreNotNull])

    const [state, dispatch] = React.useReducer(reducer, {
        voted: false,
        score: scoreRef.current,
        hide: false
    });

    return (
        <>
            {topicality !== null && <>
                {!state.hide && <li className="list">
                    <main className='post'>
                        <div className='arrow'
                             onClick={() => dispatch({type: 'VOTE'})}
                             style={{opacity: state.vote ? 0 : 1}}/>
                        <div className="content">
                            <a href={topicality.url}>{topicality.title}</a> <a className="link">({topicality.url})</a>
                            <p ref={scoreRef}>{state.score === null ? topicality.score : state.score} {(topicality.score === 1) ? 'point' : 'points'} by {topicality.by} {time} |&nbsp;
                                <span
                                    onClick={(() => dispatch({type: 'UNVOTE'}))}
                                    style={{display: state.vote ? 'inline-block' : 'none'}}>unvote | </span>
                                <span onClick={() => dispatch({type: 'HIDE'})}>hide | </span>
                                <a href="">past | </a>
                                <Link to={`discuss?id=${topicality.id}`}>discuss</Link>
                            </p>
                        </div>
                    </main>
                </li>}
            </>}
        </>
    );
}