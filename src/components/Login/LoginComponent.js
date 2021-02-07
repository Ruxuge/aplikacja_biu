import React from 'react'
import "./Login.scss"
import { Route } from "react-router-dom";
import {login} from "../../Authorization/CreateAuthProvider";



export default function LoginComponent() {

    const loginComponentState = {
        nameInput: '',
        name: '',
        passwordInput: '',
        password: ''
    }

    function loginComponentReducer(state, action) {
        switch(action.type) {
            case 'GET_NAME':
                return {
                    ...state,
                    nameInput: action.payload
                }
            case 'GET_PASSWORD':
                return {
                    ...state,
                    passwordInput: action.payload
                }
            case 'ITEM_FORM':
                return {
                    ...state,
                    name: state.nameInput,
                    password: state.passwordInput
                }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = React.useReducer(loginComponentReducer, loginComponentState);


    const onSubmit = (event?: React.FormEvent) => {
        if (event) {
            event.preventDefault();
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(state)
        })
            .then(r => r.json())
            .then(token => login(token))
    };


    return (
        <section className='login'>
            <Route path='/login'/>
            <form onSubmit={onSubmit}>
                <label htmlFor="login_Label">Login</label><br/><br/>
                <label htmlFor="login">Login: </label>
                <input type="text" name="name" onChange={event => dispatch({type: 'GET_NAME', payload: event.target.value})} /><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" name="password" onChange={event => dispatch({type: 'GET_PASSWORD', payload: event.target.value})}/><br/><br/>
                <p onClick={() => dispatch({type: 'ITEM_FORM'})}>login</p>
                <input type="submit" value="Login" /><br/><br/>
                <a href="">Forgot your password?</a><br/><br/>
            </form>

            <form>
                <label htmlFor="create_account_label">Create account</label><br/><br/>
                <label htmlFor="fusername">Username: </label>
                <input type="text" /><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" /><br/><br/>
                <input type="submit" value="Create account"/>
            </form>
        </section>
    );
}