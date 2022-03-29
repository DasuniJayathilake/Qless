import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../../style/visitorLogin/login.css';
import logo from '../../../assets/logo.png'

import { useDispatch, useStore } from 'react-redux';
import { loginAction } from '../../../container/actions';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setError] = useState("");


    const dispatch = useDispatch()
    const store = useStore()
    const navigate = useNavigate();

    //on form submit click handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const visitorCredentials = {
            email,
            password
        }

        // const visitordata = {
        //     email: "das@gmail.com",
        //     password: "123456789"
        // }

        const visitordata = {
            email: email,
            password: password
        }

        const login = dispatch(loginAction(visitordata))
        login 
            .then(data => navigate('/visitor/home'))
            // .then(data => console.log(store.getState()))
            .catch(error => {
                setError(error.err)
                alert(error.err)
            })
    }

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active";


  return (
    <div id='login'>
        <div className='container'>
            <div className='row login-box'>

                {/* base-login */}

                <div className='col-sm-5 bg-img align-self-center'>
                    <div className='info'>
                        <div className='logo clearfix'>
                            <a href='#' className='nav-brand'><img src={logo} /></a>
                        </div>
                        <div className='btn-section clearfix'>
                            {/* <button href={'/visitor/import/loginform'} className='nav-link link-btn btn-primary default-bg'>Login</button>
                            <button href={'/visitor/import/registerform'} className='nav-link link-btn btn-primary default-bg'>Register</button> */}

                            <a href={'/visitor/login'} className={defaultClass + active}><span>Login</span></a>
                            <a href={'/visitor/register'} className={defaultClass}><span>Register</span></a>
                        </div>
                    </div>
                </div>

                {/* base-login */}

                {/* login */}

                <div className='col-sm-7 bg-color align-self-center'>
                    <div className='form-section'>
                        <div className='title-login'>
                            <h3>Sign into your account</h3>
                        </div>
                        <div className='login-inner-form'>
                            <form method='POST' onSubmit={handleSubmit}>
                                
                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="email"
                                    onChange={e=>setEmail(e.target.value)} 
                                    className='input-text' 
                                    placeholder='Email Address'
                                    />
                                    <i className='icon email'></i>
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="password"
                                    onChange={e=>setPassword(e.target.value)}
                                    className='input-text' 
                                    placeholder='Password'
                                    />
                                    <i className='icon lock'></i>
                                </div>

                                <div className='form-group'>
                                    <button className='btn primary-btn'>Login</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>

                {/* login */}


            </div>
        </div>
    </div>
  );
}
