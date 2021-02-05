import React from 'react';
import useGet from "../../../hooks/useGet";

export default function Item({ idNumber, visibleItem }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})

    return (
        <>
            {visibleItem &&
            <form>
                <p>Edit comment with id: {item.id}</p>
                <label>
                    <p>User:</p>
                    <input value={item.by}/>
                </label>
                <label>
                    <p>Text:</p>
                    <input value={item.text}/>
                </label>

            </form>}
        </>
    )
}