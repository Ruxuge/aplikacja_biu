import React from 'react';
import Item from "./Item";

export default function AdminPanel() {
    const adminPanelState = {
        idInput: '',
        idNumber: '',
        visibleItem: false
    }

    function adminPanelReducer(state, action) {
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

    const [state, dispatch] = React.useReducer(adminPanelReducer, adminPanelState);

    return (
        <li>
            <form>
                <label>
                    <p>
                        Insert id od item which you want edit:
                    </p>
                </label>
                <input type="text" id="idNumber"
                       onChange={event => dispatch({type: 'GET_INPUT_VALUE', payload: event.target.value})} />
                <p onClick={() => dispatch({type: 'ITEM_FORM'})}>search</p>
                <Item idNumber={state.idNumber} visibleItem={state.visibleItem} />
            </form>
        </li>
    );
}