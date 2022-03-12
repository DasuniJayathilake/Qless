import React from 'react';

import '../../../style/visitorLogin/login.css';
import img from '../../../assets/loginImg.jpg';
import logo from '../../../assets/logo.png'

console.log(img);

export default function Login() {
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

                            <a href={'/visitor/login'} className='nav-link link-btn btn-primary default-bg'><span>Login</span></a>
                            <a href={'/visitor/register'} className='nav-link link-btn btn-primary default-bg'><span>Register</span></a>
                        </div>
                    </div>
                </div>

                {/* base-login */}

                {/* login */}

                <div className='col-sm-7 bg-color align-self-center'>
                    <div className='form-section'>
                        <div className='title'>
                            <h3>Sign into your account</h3>
                        </div>
                        <div className='login-inner-form'>
                            <form method='POST'>
                                
                                <div className='form-group form-box'>
                                    <input type="text" id="email" className='input-text' placeholder='Email Address'/>
                                    <i className='icon email'></i>
                                </div>

                                <div className='form-group form-box'>
                                    <input type="text" id="password" className='input-text' placeholder='Password'/>
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
