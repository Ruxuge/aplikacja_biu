import React from 'react';

export default function ViewJob({ idNumber, visibleItem, by, text, title }) {
    return (
        <div>
            {visibleItem &&
            <article>
                <p>Id number of edited job: {idNumber}</p>
                <p>Title: {title}</p>
                <p>Text: {text}</p>
                <p>By: {by}</p>
            </article>}
        </div>
    )
}