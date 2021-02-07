import React from 'react';
import useGet from "../../../hooks/useGet";
import ViewComment from "../Views/ViewComment";
import {commentFormReducer, commentFormState} from "../../../Reducers/ReducerCommentForm";
export default function CommentForm({ idNumber }) {

    const URI = `https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`;
    const item = useGet(URI, {})

    const commentFormState = {
        idInput: item.id,
        idNumber: item.id,
        byInput: item.by,
        by: item.by,
        textInput: item.text,
        text: item.text,
        visibleItem: false
    }

    const [state, dispatch] = React.useReducer(commentFormReducer, commentFormState);

    return (
        <>
            <form >
                <p>Edit comment with id: {commentFormState.idInput}</p>
                <label>
                    <p>User:</p>
                    <input defaultValue={commentFormState.byInput} id="by"
                           onChange={event => dispatch({type: 'GET_ID', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p>Text:</p>
                    <textarea defaultValue={commentFormState.textInput} id="text" cols="200" rows="10"
                              onChange={event => dispatch({type: 'GET_TEXT', payload: event.target.value})}
                    />
                </label>
                <label>
                    <p onClick={() => dispatch({type: 'ITEM_FORM'})}>save</p>
                </label>
            </form>
            <ViewComment idNumber={state.idNumber} visibleItem={state.visibleItem} by={state.by} text={state.text}/>
        </>
    )
}