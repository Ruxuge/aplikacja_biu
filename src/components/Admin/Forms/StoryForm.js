import React from 'react';
import useGet from "../../../hooks/useGet";
import View from "../Views/ViewJob";
import ViewStory from "../Views/ViewStory";

export default function StoryForm({ idNumber }) {
    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})


    const storyFormState = {
        idInput: item.id,
        idNumber: item.id,
        byInput: item.by,
        by: item.by,
        titleInput: item.title,
        title: item.title,
        urlInput: item.url,
        url: item.url,
        visibleItem: false
    }

    function storyFormReducer(state, action) {
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
            case 'GET_URL':
                return {
                    ...state,
                    urlInput: action.payload
                }
            case 'ITEM_FORM':
                return {
                    ...state,
                    by: state.idInput,
                    title: state.titleInput,
                    url: state.urlInput,
                    visibleItem: true
                }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = React.useReducer(storyFormReducer, storyFormState);

    return (
        <>
            <form >
                <p>Edit story with id: {storyFormState.idInput}</p>
                <label>
                    <p>User:</p>
                    <input defaultValue={storyFormState.byInput} id="by"
                           onChange={event => dispatch({type: 'GET_ID', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p>Title:</p>
                    <textarea defaultValue={storyFormState.titleInput} id="title" cols="70"
                              onChange={event => dispatch({type: 'GET_TITLE', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p>Url:</p>
                    <textarea defaultValue={storyFormState.urlInput} id="text" cols="70"
                              onChange={event => dispatch({type: 'GET_URL', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p onClick={() => dispatch({type: 'ITEM_FORM'})}>save</p>
                </label>
            </form>
            <ViewStory idNumber={state.idNumber} visibleItem={state.visibleItem} by={state.by} title={state.title} text={state.url}/>
        </>
    )
}