import React from 'react';
import Item from "./Item";
import {adminPanelReducer, adminPanelState, adminPanelState as state} from "../../Reducers/ReducerAdminPanel"

export default function AdminPanel() {

    const adminPanelState = {
        idInput: '',
        idNumber: '',
        visibleItem: false
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