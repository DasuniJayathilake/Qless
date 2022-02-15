import React from 'react';
import logo from '../../assets/logo.png'

export default function Register() {
  return (
    <div id='login'>
    <div className='container'>
        <div className='row login-box'>

            {/* base-login.jsx */}

            <div className='col-sm-5 bg-img align-self-center'>
                <div className='info'>
                    <div className='logo clearfix'>
                        <a href='#' className='nav-brand'><img src={logo} alt="logo" /></a>
                    </div>
                    <div className='btn-section clearfix'>
                        {/* <button className='nav-link link-btn btn-primary default-bg'>Login</button>
                        <button className='nav-link link-btn btn-primary default-bg'>Register</button> */}

                        <a href={'/visitor/login'} className='nav-link link-btn btn-primary default-bg'>Login</a>
                        <a href={'/visitor/register'} className='nav-link link-btn btn-primary default-bg'>Register</a>
                    </div>
                </div>
            </div>

            {/* base-login.jsx */}

            {/* login.jsx */}

            <div className='col-sm-7 bg-color align-self-center'>
                <div className='form-section'>
                    <div className='title'>
                        <h3>Create a new account</h3>
                    </div>
                    <div className='login-inner-form'>
                        <form method='POST'>
                            
                            <div className='form-group form-box'>
                                <input type="text" id="name" className='input-text' placeholder='Full Name'/>
                                <i className='icon user'></i>
                            </div>

                            <div className='form-group form-box'>
                                <input type="text" id="contact" className='input-text' placeholder='Contact No.'/>
                                <i className='icon contact'></i>
                            </div>

                            <div className='form-group form-box'>
                                <input type="text" id="email" className='input-text' placeholder='Email Address'/>
                                <i className='icon email'></i>
                            </div>

                            <div className='form-group form-box'>
                                <input type="text" id="nic" className='input-text' placeholder='NIC No.'/>
                                <i className='icon nic'></i>
                            </div>

                            <div className='form-group'>
                                <button className='btn primary-btn'>Register</button>
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
