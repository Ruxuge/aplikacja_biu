import React, { useState } from 'react'
import "./Past.scss"
import useGet from "../../hooks/useGet";
import Topicality from "../New/Topicality";
import PastPost from "./PastPost";

export default function Past() {
    const URI = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    const news = useGet(URI, []);

    const [dateInput, setDateInput] = useState('');
    const [date, setDate] = useState('');
    const unixDate = parseInt((new Date(date).getTime() / 1000).toFixed(0))

    return (
        <article>
            <div>
                <form>
                    <label>
                        <p>
                            Insert Date of news which you want see:
                        </p>
                    </label>
                    <input type="date" id="date" onChange={e => setDateInput(e.target.value)}/>
                    <p onClick={() => {setDate(dateInput)}}>search</p>
                </form>
                <p> {unixDate} </p>
            </div>
            <ul>
               {/* {news.map(topicalityId =>
                    <PastPost topicalityId={topicalityId} unixDate={unixDate} date={date} />
                        PastPost({props}) {
                            return (
                                <>{ postUnixDate < date &&
                                    <Topicality topicalityId />
                                }</>
                            );
                        }*/}
            </ul>
        </article>
    );
}