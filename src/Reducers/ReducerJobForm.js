import React from "react";



export function jobFormReducer(state, action) {
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

