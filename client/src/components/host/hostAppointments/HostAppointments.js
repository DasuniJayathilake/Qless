// import React from 'react'

// export default function HostAppointments() {
//   return (
//     <div>HostAppointments</div>
//   )
// }

import React, { Component } from 'react';
import axios from 'axios';
import HostNavigation from '../navigation/HostNavigation';

export default class Appointments extends Component {
constructor(props){
  super(props);

  this.state = {
    appointments:[]
  };
}

componentDidMount(){
  this.retrieveAppointments();
}

retrieveAppointments(){
  axios.get("/appointments").then(res => {
    if(res.data.success){
      this.setState({
        appointments:res.data.existingAppointments
      });
      console.log(this.state.appointments);
    }
  });
}

//delete button related

onDelete = (id) =>{
  axios.delete(`/appointments/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveAppointments();
  })
}

//search bar related

filterData(appointments, searchKey){

  const result = appointments.filter((appointments) => 
    appointments.VisitorName.toLowerCase().includes(searchKey) ||
    appointments.HostName.toLowerCase().includes(searchKey) ||
    appointments.Purpose.toLowerCase().includes(searchKey) ||
    appointments.Date.toLowerCase().includes(searchKey) 
  )

  this.setState({appointments: result})
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("/appointments").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingAppointments, searchKey)
    }
  });
}


  render() {
    return (

      <div id='hostdashboard'> 
        <HostNavigation />

        <div id='main'>
         
              <div class="head"> 
                <div class="col-div-6">
                  <span class="nav"  >☰ Appointments</span>
                  <span class="nav2"  >☰ Appointments</span>
                </div>
              
                <div class="col-div-6">
                  <input
                  className='form-control search-feild'
                  type='search'
                  placeholder="&#xF002;"              
                  name='searchQuery'
                  onChange={this.handleSearchArea}/>
                </div>

                <div class="clearfix"></div>
              </div>

              <div class="clearfix"></div>
              <br/>
          
          <div className='dash-box-details'>
            <div className='dash-content-box'>
              <p>All Appointments Details</p>

              <div className='table-wrapper'>
                <table className="table detail-table" style={{marginTop:'40px'}}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Visitor Name</th>
                      <th scope="col">Host Name</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.appointments.map((appointments, index) => (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{appointments.VisitorName}</td>
                        <td>{appointments.HostName}</td>
                        <td>{appointments.Purpose}</td>
                        <td>{appointments.Date}</td>
                        <td>{appointments.Time}</td>
                        <td>
                          <a className="btn btn-success btn-action">
                            <i class="fa-solid fa-check"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-danger btn-action">
                            <i class="fa-solid fa-xmark"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-warning btn-action">
                            <i class="fa-solid fa-message"></i>
                          </a>
                        </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  } 
}

