
import React from 'react';
// import login from '../imports/login';
import '../../style/login.css';
import img from '../../assets/loginImg.jpg';

console.log(img);

export default function Login() {
  return (
    <div id='login'>
        <div className='container'>
            <div className='row login-box'>

                {/* base-login.jsx */}

                <div className='col-sm-5 bg-img align-self-center'>
                    <div className='info'>
                        <div className='logo clearfix'>
                            <a href='#' className='nav-brand'>Logo</a>
                        </div>
                        <div className='btn-section clearfix'>
                            <button className='nav-link link-btn btn-primary default-bg'>Login</button>
                            <button className='nav-link link-btn btn-primary default-bg'>Register</button>
                        </div>
                    </div>
                </div>

                {/* base-login.jsx */}

                {/* login.jsx */}

                <div className='col-sm-7 bg-color align-self-center'>
                    {/* <login/> */}
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

                {/* login.jsx */}

            </div>
        </div>
    </div>
  );
}
