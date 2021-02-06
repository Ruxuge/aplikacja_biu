import React from 'react';

export default function ViewComment({ idNumber, visibleItem, by, text}) {
    return (
        <div>
            {visibleItem &&
            <article>
                <p>Id number of edited comment: {idNumber}</p>
                <p>Text: {text}</p>
                <p>By: {by}</p>
            </article>}
        </div>
    )
}