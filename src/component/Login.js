import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import '../css/Login.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    // Handle Submit function
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (username.length === 0 || password.length === 0) {
            setError("Username or Password is incorrect.");
        }
        if (username === 'test@gmail.com' && password === '123456') {
            navigate("/home", { state: { username } });
        }
        else {
            setError("Username or Password is incorrect.");
        }
    }

    const iconStyleFacebook = {
        color: 'white',
        background: '#4267B2',
        width: '30px',
        height: '30px',
        marginRight: '10px'
    }

    return (
        <div className='login'>
            <div className='sign-in-text'>Sign In With</div>

            <div className='social-media'>
                <div className='social-media-inner'>
                    <Link to="https://www.facebook.com" target='_blank'>
                        <FaFacebookSquare style={iconStyleFacebook} />
                        <span className='fb-text'>Facebook</span>
                    </Link>
                </div>
                <div className='social-media-google'>
                    <Link to="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                        <img src={require("../images/google-icon.png")} alt='Google Icon' className='img' />
                        <span className='google-text'>Google</span>
                    </Link>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='error'>
                    {error && <p>{error}</p>}
                </div>

                {/* Username */}
                <div className='form-input'>
                    <label for="" className="form-label">User Name</label>
                    <input
                        type="email"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className='form-input'>
                    <label for="" className="form-label">Password</label>
                    <small className='small-text-underline'>Forgot?</small>
                    <input
                        type='password'
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input name="" id="" className="btn btn-primary submit" type="submit" value="Sign In" />

            </form>

            <div className='signup'>
                <span className='small-text'>Not a member?</span> <span className='small-text-underline'>Sign up now</span>
            </div>
        </div>
    )
}

export default Login