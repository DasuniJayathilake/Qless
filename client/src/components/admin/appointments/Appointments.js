import React, { Component } from 'react';
import axios from 'axios';


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
      <div className="container">
        {/* <p>Visitor Details</p> */}
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
          <h4>All Appointments</h4>
          </div>
          <div className='col-lg-3 mt-2 mb-2'>
            <input
            className='form-control'
            type='search'
            placeholder='Search'              
            name='searchQuery'
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
        <table className="table table-hover" style={{marginTop:'40px'}}>
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
                <td>
                  <a href={`appointments/details/{details._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{appointments.VisitorName}</a>
                </td>
                <td>
                  <a href={`appointments/details/{details._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{appointments.HostName}</a>
                </td>
                <td>{appointments.Purpose}</td>
                <td>{appointments.Date}</td>
                <td>{appointments.Time}</td>
                <td>
                  <a className="btn btn-warning" href={`appointments/edit/${appointments._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" onClick={() => this.onDelete(appointments._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>

        <button className='btn btn-success'>
        <a href={`appointments/add`} style={{textDecoration:'none', color:'white'}}>
          <i class="fa-regular fa-calendar-plus"></i>&nbsp;Add New
        </a>
        </button>

      </div>
    )
  } 
}

