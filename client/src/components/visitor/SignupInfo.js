import React from 'react'

export default function SignupInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">

      <div className='form-group form-box'>
        <input
            type="text"
            className="input-text"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <i className='icon lock'></i>
      </div>
        
      <div className='form-group form-box'>
        <input
          type="text"
          className="input-text"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
        />
        <i className='icon lock'></i>
      </div>
    
    </div>
    
    
    
  )
}
