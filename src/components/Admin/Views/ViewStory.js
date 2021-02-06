import React from 'react';

export default function ViewStory({ idNumber, visibleItem, by, url, title }) {
    return (
        <div>
            {visibleItem &&
            <article>
                <p>Id number of edited job: {idNumber}</p>
                <p>Title: {title}</p>
                <p>Url: {url}</p>
                <p>By: {by}</p>
            </article>}
        </div>
    )
}