import React from "react";
import "./Discuss.scss";
import useGet from "../../hooks/useGet";
import useAddedAgo from "../../hooks/useAddedAgo";
import {Link, Route} from "react-router-dom";

export default function Discuss() {

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const newsId = urlParams.get('id')

    const URI = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`;
    const news = useGet(URI, {});

    const timeNotNull = () => news !== null ? news.time : 0;
    const time = useAddedAgo(timeNotNull())

    return (
        <section>
        <Route path='/discuss'/>
            <div>
                <br/>
                <a href={news.url}>{news.title}</a>
                <p>{news.score} {news.score === 1 ? 'point' : 'points'} by {news.by} {time}&nbsp;</p>
            </div>
            <form>
                <label htmlFor="discuss"></label>
                <textarea name="text" rows="6" cols="60"/><br/><br/>
                <input type="submit" value="add comment"/>
            </form>
            <section>


            </section>
        </section>

    );
}