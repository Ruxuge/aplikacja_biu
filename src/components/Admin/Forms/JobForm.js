import React from 'react';
import useGet from "../../../hooks/useGet";
import View from "../Views/ViewJob";
import ViewJob from "../Views/ViewJob";

export default function JobForm({ idNumber }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})


    const jobFormState = {
        idInput: item.id,
        idNumber: item.id,
        byInput: item.by,
        by: item.by,
        titleInput: item.title,
        title: item.title,
        textInput: item.text,
        text: item.text,
        visibleItem: false
    }

    function jobFormReducer(state, action) {
        switch(action.type) {
            case 'GET_ID':
                return {
                    ...state,
                    idInput: action.payload
                }
            case 'GET_TITLE':
                return {
                    ...state,
                    titleInput: action.payload
                }
            case 'GET_TEXT':
                return {
                    ...state,
                    textInput: action.payload
                }
            case 'ITEM_FORM':
                return {
                    ...state,
                    by: state.idInput,
                    title: state.titleInput,
                    text: state.textInput,
                    visibleItem: true
                }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = React.useReducer(jobFormReducer, jobFormState);

    return (
        <>
            <form >
                <p>Edit job offer with id: {jobFormState.idInput}</p>
                <label>
                    <p>User:</p>
                    <input defaultValue={jobFormState.byInput} id="by"
                           onChange={event => dispatch({type: 'GET_ID', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p>Title:</p>
                    <textarea defaultValue={jobFormState.titleInput} id="title" cols="70"
                           onChange={event => dispatch({type: 'GET_TITLE', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p>Text:</p>
                    <textarea defaultValue={jobFormState.textInput} id="text" cols="200" rows="10"
                           onChange={event => dispatch({type: 'GET_TEXT', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p onClick={() => dispatch({type: 'ITEM_FORM'})}>save</p>
                </label>
            </form>
            <ViewJob idNumber={state.idNumber} visibleItem={state.visibleItem} by={state.by} title={state.title} text={state.text}/>
        </>
    )
}