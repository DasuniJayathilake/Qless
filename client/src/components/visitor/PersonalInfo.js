import React from 'react'

export default function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">

      <div className='form-group form-box'>
        <input
          type="text"
          className="input-text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <i className='icon user'></i>
      </div>
      
      <div className='form-group form-box'>
        <input
          type="text"
          className="input-text"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <i className='icon email'></i>
      </div>

      <div className='form-group form-box'>
        <input
          type="text"
          className="input-text"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={(e) => {
            setFormData({ ...formData, contact: e.target.value });
          }}
        />
        <i className='icon contact'></i>
      </div>

      <div className="form-group form-box">
        <input
          type="text"
          className="input-text"
          placeholder="NIC Number"
          value={formData.nic}
          onChange={(e) => {
            setFormData({ ...formData, nic: e.target.value });
          }}
        />
        <i className='icon nic'></i>
      </div>

    </div>
  )
}
