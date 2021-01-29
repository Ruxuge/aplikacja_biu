import React from 'react'
import "./Login.scss"
import { Route } from "react-router-dom";

export default function Login() {
    return (
        <section className='login'>
            <Route path='/login'/>
            <form>
                <label htmlFor="login_Label">Login</label><br/><br/>
                <label htmlFor="fusername">Username: </label>
                <input type="text" id="fusername" name="fusername"/><br/>
                <label htmlFor="fpassword">Password: </label>
                <input type="password" id="fpassword" name="fpassword"/><br/><br/>
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