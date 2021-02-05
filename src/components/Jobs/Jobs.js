import React from 'react'
import "./Jobs.scss"
import useGet from "../../hooks/useGet";
import Job from "./Job";

export default function Jobs() {
    const URI = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty';
    const jobs = useGet(URI, []);

    const [visible, setVisible] = React.useState(false);

    const [input, setInput] = React.useState('');
    const [inputURL, setInputURL] = React.useState('');
    const [addedJob, setAddedJob] = React.useState([]);

    return (
        <article>
            <button onClick={() => setVisible(true)}>Add A Job</button>
            <form style={{display: visible ? 'block' : 'none'}}>
                <label htmlFor="job-type">Job Type</label>
                <input id="job-type" type="text" onChange={e => setInput(e.target.value)} />
                <label htmlFor="job-url">URL To Job Offer</label>
                <input id="job-url" type="text" onChange={e => setInputURL(e.target.value)} />
                <div className='hide-button' onClick={() => setVisible(false)}>Hide</div>
                <div className='add-button' onClick={() => setAddedJob(prev => [...prev, {jobType: input, url: inputURL}])}>Add</div>
            </form>
            <ul>
                {addedJob.length > 0 && addedJob.map(added => (<li><a href={added.url}>{added.jobType}</a></li>))}
                {jobs.map(jobId => (
                    <Job jobId={jobId}/>
                ))}
            </ul>
        </article>
    );
}