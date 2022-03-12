import React from 'react';
import logo from '../../../assets/logo.png';

import SignupInfo from './SignupInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';

import { useState } from "react";

export default function Register() {

    const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    nic: "",
    photo:"",
    password: "",
    confirmPassword: "",
  });

  const FormTitles = ["personal", "other", "signup"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div id='login'>
    <div className='container'>
        <div className='row login-box'>

            {/* base-login */}

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

            {/* base-login */}

            {/* registration */}

            <div className='col-sm-7 bg-color align-self-center'>
                <div className='form-section'>
                    <div className='title'>
                        <h3>Create a new account</h3>
                    </div>
                    <div className='login-inner-form'>

                        <div className="progressbar">
                            <div
                            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
                            ></div>
                        </div>
                        <div className="form-container">
                            <div className="body">{PageDisplay()}</div>
                            <div className="footer">
                                <button
                                    className='btn nextprev-btn'
                                    disabled={page === 0}
                                    onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                    }}
                                >
                                    Previous
                                </button>
                                <button
                                    className='btn nextprev-btn'
                                    onClick={() => {
                                    if (page === FormTitles.length - 1) {
                                        alert("FORM SUBMITTED");
                                        console.log(formData);
                                    } else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                    }}
                                >
                                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                                </button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

            {/* registration  */}

        </div>
    </div>
</div>
  );
}
