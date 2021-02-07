import React from "react";

export const adminPanelState = {
    idInput: '',
    idNumber: '',
    visibleItem: false
}

export function adminPanelReducer(state, action) {
    switch(action.type) {
        case 'GET_INPUT_VALUE':
            return {
                ...state,
                idInput: action.payload
            }
        case 'ITEM_FORM':
            return {
                ...state,
                idNumber: state.idInput,
                visibleItem: true
            }
        default:
            throw new Error();
    }
}

export const [state, dispatch] = React.useReducer(adminPanelReducer, adminPanelState);

