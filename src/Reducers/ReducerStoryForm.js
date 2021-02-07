import React from "react";

export function storyFormReducer(state, action) {
    switch (action.type) {
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