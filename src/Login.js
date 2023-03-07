import {useRef, useState, useEffect} from "react";
import './Login.css';
import axios from "./api/axios";
const LOGIN_URL = '/login';

const Login = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();// By default, it will reload the page, so disabled
        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username:user, password:pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });
            console.log("HandleSubmit: "+JSON.stringify(response?.data)) //Optional chain
            if(response?.data.loginStatus){
                props.setAuthenticated(true);
            }
            else{
                alert('Login Failed')
            }
            setUser('');
            setPwd('');
            console.log("End of login phase")
        }catch (err){
            if(!err?.response) {
                setErrMsg('No server response');
            } else if(err.response?.status === 400){
                setErrMsg('Missing username or password');
            } else if(err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }
    return(
        <section className="formContainer">
            <p ref={errRef} className={errMsg? "errmsg": "offscreen"} aria-live={"assertive"}></p>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>Username</label>
                        <input
                            type={"text"}
                            placeholder={"username"}
                            id={"username"}
                            ref = {userRef}
                            autoComplete={"off"}
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label>Password</label>
                        <input
                            type={"password"}
                            placeholder={"password"}
                            id={"password"}
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>
                </div>
                <button className={"submitButton"}>Sign In</button>
            </form>
        </section>)
};

export default Login;