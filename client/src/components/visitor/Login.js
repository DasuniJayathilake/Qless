
import React from 'react';
import Loginform from '../imports/Loginform';
import '../../style/login.css';
import img from '../../assets/loginImg.jpg';
import Registerform from '../imports/Registerform';

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

                {/* Loginform component */}
                {/* <Loginform /> */}
                <Registerform />


            </div>
        </div>
    </div>
  );
}
