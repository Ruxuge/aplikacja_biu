import React from 'react'
import "./New.scss"
import useGet from "../../hooks/useGet";
import Topicality from "./Topicality";
import {Link} from "react-router-dom";

export default function New() {
    const URI = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    const news = useGet(URI, []);

    const [visible, setVisible] = React.useState(false);

    const [hide, setHide] = React.useState(false);
    const [vote, setVote] = React.useState(false);

    const [input, setInput] = React.useState('');
    const [inputURL, setInputURL] = React.useState('');
    const [addedNews, setAddedNews] = React.useState([]);

    const score = 0;
    const by = "user";
    const time = "now";
    const id = 1;

    return (
        <article>
            <button onClick={() => setVisible(true)}>Add A News</button>
            <form style={{display: visible ? 'block' : 'none'}}>
                <label htmlFor="news-title">News Title</label>
                <input id="news-title" type="text" onChange={e => setInput(e.target.value)} />
                <label htmlFor="news-url">URL To News</label>
                <input id="news-url" type="text" onChange={e => setInputURL(e.target.value)} />
                <div className='hide-button' onClick={() => setVisible(false)}>Hide</div>
                <div className='add-button' onClick={() => setAddedNews(prev => [...prev, {NewsTitle: input, url: inputURL}])}>Add</div>
            </form>
            <ol>
                    {addedNews.length > 0 && addedNews.map(added => (
                        /*{!hide && */<li className="list">
                            {/*{news !== null &&*/}
                            <main className='post'>
                                <div className='arrow'
                                    onClick={() => setVote(true)}
                                    style={{opacity: vote ? 0 : 1}}
                                />
                                <div className="content">
                                    <a href={added.url}>{added.NewsTitle}</a>
                                    <p>{score} {score === 1 ? 'point' : 'points'} by {by} {time} |&nbsp;
                                        <span
                                            onClick={() => setVote(false)}
                                            style={{display: vote ? 'inline-block' : 'none'}} > unvote | </span>
                                        <span onClick={() => setHide(true)}>hide | </span>
                                        <a href="">past | </a>
                                        <Link to={`/item?id=${id}`}>discuss</Link>
                                    </p>
                                </div>
                            </main>
                        </li>))}
                    {news.map(topicalityId => (
                        <Topicality topicalityId={topicalityId} />
                    ))}
            </ol>
        </article>
    );
}