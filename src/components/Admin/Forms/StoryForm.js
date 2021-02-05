import React from 'react';
import useGet from "../../../hooks/useGet";

export default function StoryForm({ idNumber }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})

    console.log(idNumber)


    return (
        <>
            <form>
            <p>Edit story with id: {item.id}</p>
            <label>
                <p>User:</p>
                <input value={item.by}/>
            </label>
            <label>
                <p>Title:</p>
                <input value={item.title}/>
            </label>
            <label>
                <p>Url:</p>
                <input value={item.url}/>
            </label>
            </form>
        </>
    )
}