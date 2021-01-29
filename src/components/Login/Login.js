import React, {useState} from 'react'
import "./Login.scss"
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <section className='login'>
            <Route path='/login'/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login_Label">Login</label><br/><br/>
                <label htmlFor="fusername">Username: </label>
                <input type="text" id="fusername" name="fusername" onChange={e => setUserName(e.target.value)} /><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" id="fpassword" name="fpassword" onChange={e => setPassword(e.target.value)} /><br/><br/>
                <input type="submit" value="Login"/><br/><br/>
                <a href="">Forgot your password?</a><br/><br/>
            </form>

            <form>
                <label htmlFor="create_account_label">Create account</label><br/><br/>
                <label htmlFor="fusername">Username: </label>
                <input type="text" id="fusername" name="fusername"/><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" id="fpassword" name="fpassword"/><br/><br/>
                <input type="submit" value="Create account"/>
            </form>
        </section>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};