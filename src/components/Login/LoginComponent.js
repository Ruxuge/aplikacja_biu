import React, {useState} from 'react'
import "./Login.scss"
import { Route } from "react-router-dom";
import {ChangeEvent} from "react";
import {login} from "../../Authorization/CreateAuthProvider";



export default function Login() {

    const [credentials, setCredentials] = useState({
        name: " ",
        password: " "
    });

    const onChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [name]: value})
    };

    const onSubmit = (event?: React.FormEvent) => {
        if (event) {
            event.preventDefault();
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(token => login(token))
    };

    console.log(credentials)

    return (
        <section className='login'>
            <Route path='/login'/>
            <form onSubmit={onSubmit}>
                <label htmlFor="login_Label">Login</label><br/><br/>
                <label htmlFor="login">Login: </label>
                <input type="text" name="name" value={credentials.name} onChange={onChange} /><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" name="password" value={credentials.password} onChange={onChange} /><br/><br/>
                <input type="submit" value="Login"/><br/><br/>
                <a href="">Forgot your password?</a><br/><br/>
            </form>

            {/*<form>
                <label htmlFor="create_account_label">Create account</label><br/><br/>
                <label htmlFor="fusername">Username: </label>
                <input type="text" /><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" /><br/><br/>
                <input type="submit" value="Create account"/>
            </form>*/}
        </section>
    );
}