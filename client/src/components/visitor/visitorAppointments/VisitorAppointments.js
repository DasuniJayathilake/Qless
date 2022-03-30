import React, { Component } from 'react';
import '../../../style/visitorAppointments/visitorAppointments.css';
import axios from 'axios'; 
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import appointments from '../../../assets/appointments.png';


export default class VisitorAppointments extends Component{

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

  render(){
    return (
      <div>
          <Navigation />
          <br/><br/>
          <div id='visitorAppointments'>
              <div className='container'>
                  <div className='row login-box'>
  
                      {/* base-login */}
  
                      <div className='col-sm-5 bg-left align-self-center'>
                          <div className='info'>
                            {/* <SearchBar/> */}
                            <div id='user'>Appointments</div>
                            <div className='cover-img'>
                                <img src={appointments} />
                            </div>
                            <div className='btn-section clearfix'>
                              <a href={'/visitor/appointments'} className='nav-link link-btn btn-primary default-bg'><span>New</span></a>
                              <a href={'/visitor/appointmentHistory'} className='nav-link link-btn btn-primary default-bg'><span>History</span></a>
                            </div>
                          </div>
                      </div>
  
                      {/* base-login */}
  
                      {/* login */}
  
                      <div className='col-sm-7 bg-color align-self-center'>
                            <div className='form-section'>
                              <div className='title'>
                                  <h3>Appointment Details</h3>
                              </div>
  
                              <div className='login-inner-form'>
  
                                <form className='need-validation' noValidate>
  
                                  <div className='form-group form-box'>
                                  <input 
                                    type='text'
                                    className='form-control input-text'
                                    name='visitorname'
                                    placeholder='Your Name'
                                    value={this.state.visitorname}
                                    onChange={this.handleInputChange}
                                    />
                                  </div>
  
                                  <div className='form-group form-box'>
                                  <input 
                                    type='text'
                                    className='form-control input-text'
                                    name='hostname'
                                    placeholder='Host Name'
                                    value={this.state.hostname}
                                    onChange={this.handleInputChange}
                                    />
                                  </div>
  
                                  <div className='form-group form-box' >
                                    <input 
                                    type='text'
                                    className='form-control input-text'
                                    name='purpose'
                                    placeholder='Purpose of Meeting'
                                    value={this.state.purpose}
                                    onChange={this.handleInputChange}
                                    />
                                  </div>
  
                                  <div className='form-group form-box' >
                                    <input 
                                    type='text'
                                    className='form-control input-text'
                                    name='date'
                                    placeholder='Date'
                                    value={this.state.date}
                                    onChange={this.handleInputChange}
                                    />
                                  </div>
  
                                  <div className='form-group form-box' >
                                    <input 
                                    type='text'
                                    className='form-control input-text'
                                    name='time'
                                    placeholder='Time'
                                    value={this.state.time}
                                    onChange={this.handleInputChange}
                                    />
                                  </div>
  
                                  <div className='form-group'>
                                    <button className='btn primary-btn' type='submit' onClick={this.onSubmit}>
                                      <i className='far fa-check-square'></i>
                                      &nbsp; Save
                                    </button>
                                  </div>
  
                                </form>
                              </div>
  
                            </div>
                        </div>
  
                      {/* login */}
  
  
                  </div>
              </div>
          </div>
          <Footer />
      </div>
    )
  }
}
