import React from "react";
import "./Discuss.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";
import { Route} from "react-router-dom";
import ThisComment from "./ThisComment";
import Job from "../Jobs/Job";

export default function Discuss() {

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const newsId = urlParams.get('id')

    const URI = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`;
    const news = useGet(URI, {});


    const timeNotNull = () => news !== null ? news.time : 0;
    const time = useAddedAgo(timeNotNull())


    const comments = news !== {} ? news.kids : 0;
    console.log(comments)

    const [input, setInput] = React.useState('');
    const [addedComment, setAddedComment] = React.useState([]);

    return (
        <section>
        <Route path='/discuss'/>
            <div>
                <br/>
                <a href={news.url}>{news.title}</a>
                <p>{news.score} {news.score === 1 ? 'point' : 'points'} by {news.by} {time}&nbsp;</p>
            </div>
            <form>
                <label htmlFor="discuss">Discuss</label>
                <textarea name="text" rows="6" cols="60" onChange={e => setInput(e.target.value)}/><br/><br/>
                <div className='add-button' onClick={() => setAddedComment(prev => [...prev, {comment: input}])}>Add</div>
            </form>
            {comments !== undefined && <>
            <article>
                <ol>
                    {addedComment.length > 0 && addedComment.map(added => (<li><p>User</p><p>{added.comment}</p></li>))}
                    {comments.map(commentId => (
                        <ThisComment commentId={commentId} />
                    ))}
                </ol>
            </article>
            </>}
        </section>

    );
}