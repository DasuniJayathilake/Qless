import React, { Component } from 'react';
import axios from 'axios'; 
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default class AddAppointment extends Component {

  constructor(props){
    super(props);
    this.state={
      visitorname:"",
      hostname:"",
      purpose:"",
      date:"",
      time:""
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {

    e.preventDefault();

    const {visitorname, hostname, purpose, date, time} = this.state;

    const data = {
      VisitorName: visitorname,
      HostName: hostname,
      Purpose: purpose,
      Date: date,
      Time: time
    }

    console.log(data);

    axios.post("/appointments/save", data).then((res) => {
      if(res.data.success){
        alert("New Appointment Added Successfully");
        this.setState(
          {
            VisitorName: "",
            HostName: "",
            Purpose: "",
            Date: "",
            Time: ""
          }
        )
      }
    })

  }


  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>Add New Appointment</h1>

            <form className='need-validation' noValidate>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Visitor Name</label>
                <input 
                type='text'
                className='form-control'
                name='visitorname'
                placeholder='Enter Visitor Name'
                value={this.state.visitorname}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Host Name</label>
                <input 
                type='text'
                className='form-control'
                name='hostname'
                placeholder='Enter Host Name'
                value={this.state.hostname}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Purpose</label>
                <input 
                type='text'
                className='form-control'
                name='purpose'
                placeholder='Enter Purpose of Meeting'
                value={this.state.purpose}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Date</label>
                <input 
                type='text'
                className='form-control'
                name='date'
                placeholder='Enter Date'
                value={this.state.date}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Time</label>
                <input 
                type='text'
                className='form-control'
                name='time'
                placeholder='Enter Time'
                value={this.state.time}
                onChange={this.handleInputChange}/>
              </div>

              <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className='far fa-check-square'></i>
                &nbsp; Save
              </button>

            </form>
        </div>
    );
  }
}
