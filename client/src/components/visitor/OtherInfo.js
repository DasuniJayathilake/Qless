import React from 'react'

export default function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">

      <div className="form-group form-box">
        <input
          type="text"
          className="input-text"
          placeholder="Gender"
          value={formData.gender}
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}
        />
        <i className='icon user'></i>
      </div>

      <div className="form-group form-box">
        <input
          type="text"
          className="input-text"
          placeholder="NIC"
          value={formData.nic}
          onChange={(e) => {
            setFormData({ ...formData, nic: e.target.value });
          }}
        />
        <i className='icon nic'></i>
      </div>

      <div className="form-group form-box">
        <input
          type="text"
          className="input-text"
          placeholder="Upload a Photo of You..."
          value={formData.photo}
          onChange={(e) => {
            setFormData({ ...formData, photo: e.target.value });
          }}
        />
        <i className='icon img'></i>
      </div>
      
    </div>
  )
}
