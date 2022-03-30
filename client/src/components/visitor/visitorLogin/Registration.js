import React, {useState} from 'react';
// import {useLocation, useHistory, link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../../../style/visitorLogin/login.css';
import img from '../../../assets/loginImg.jpg';
import logo from '../../../assets/logo.png'

import { registerAction } from '../../../container/actions';
import { useDispatch } from 'react-redux';

export default function Registration() {

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate();

    //on form submit click handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const newVisitor = {
            name,
            contact,
            email,
            nic,
            password,
            confirmPassword
        } 
        
        // const visitor = {
        //     name: "Dasuni", 
        //     contact: "0332281997", 
        //     email: "das@gmail.com", 
        //     nic: "975941400v", 
        //     password: "123456789", 
        //     confirmPassword: "123456789"
        // }

        const visitor = {
            name: name, 
            contact: contact, 
            email: email, 
            nic: nic, 
            password: password, 
            confirmPassword: confirmPassword
        }
        
        const validate = dispatch(registerAction(visitor));

        validate
            .then(data => {
                // console.log(data)
                navigate('/visitor/login');
            })
            // .catch(error => console.log(error))
            .catch(error => {
                setError(error.err)
                alert(error.err)
            })

        // console.log(newVisitor);
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

                            <a href={'/visitor/login'} className={defaultClass}><span>Login</span></a>
                            <a href={'/visitor/register'} className={defaultClass + active}><span>Register</span></a>
                        </div>
                    </div>
                </div>

                {/* base-login */}

                {/* login */}

                <div className='col-sm-7 bg-color align-self-center'>
                    <div className='form-section'>
                        <div className='title-signup'>
                            <h3>Sign into your account</h3>
                        </div>
                        <div className='login-inner-form'>
                            <form method='POST' onSubmit={handleSubmit}>
                                
                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="name"
                                    onChange={e=>setName(e.target.value)} 
                                    className='input-text' 
                                    placeholder='Name'
                                    />
                                    {/* <i className='icon email'></i> */}
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="contact"
                                    onChange={e=>setContact(e.target.value)}  
                                    className='input-text' 
                                    placeholder='Contact No.'
                                    />
                                    {/* <i className='icon email'></i> */}
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="email"
                                    onChange={e=>setEmail(e.target.value)} 
                                    className='input-text' 
                                    placeholder='Email Address'
                                    />
                                    {/* <i className='icon email'></i> */}
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="nic"
                                    onChange={e=>setNic(e.target.value)} 
                                    className='input-text' 
                                    placeholder='NIC No.'
                                    />
                                    {/* <i className='icon email'></i> */}
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="password" 
                                    onChange={e=>setPassword(e.target.value)}
                                    className='input-text' 
                                    placeholder='Password'
                                    />
                                    {/* <i className='icon lock'></i> */}
                                </div>

                                <div className='form-group form-box'>
                                    <input 
                                    type="text" 
                                    id="confirmPassword" 
                                    onChange={e=>setConfirmPassword(e.target.value)}
                                    className='input-text' 
                                    placeholder=' Confirm Password'
                                    />
                                    {/* <i className='icon lock'></i> */}
                                </div>

                                <div className='form-group'>
                                    <button className='btn primary-btn'>Register</button>
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
