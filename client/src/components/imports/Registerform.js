import React from 'react';

export default function Registerform() {
  return (
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
  );
}
