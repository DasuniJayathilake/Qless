import React, { Component } from 'react';
import axios from 'axios';
import Navi from '../navigation/navi';

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

      <div>
        <Navi />

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
                        <a className="btn btn-primary btn-action" href={`appointments/details/{details._id}`}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                        &nbsp;
                        <a className="btn btn-warning btn-action" href={`appointments/edit/${appointments._id}`} onClick={() => this.onDelete(appointments._id)}>
                          <i className="fas fa-edit"></i>
                        </a>
                        &nbsp;
                        <a className="btn btn-danger btn-action" href="#" onClick={() => this.onDelete(appointments._id)}>
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>

              <button className='btn btn-add-new'>
              <a href={`appointments/add`} >
                <i class="fa-regular fa-calendar-plus"></i>&nbsp;Add New
              </a>
              </button>
            </div>
          </div>

        </div>
      </div>

      // <div className="container">
      //   {/* <p>Visitor Details</p> */}
      //   <div className='row'>
      //     <div className='col-lg-9 mt-2 mb-2'>
      //     <h4>All Appointments</h4>
      //     </div>
      //     <div className='col-lg-3 mt-2 mb-2'>
      //       <input
      //       className='form-control'
      //       type='search'
      //       placeholder='Search'              
      //       name='searchQuery'
      //       onChange={this.handleSearchArea}>

      //       </input>
      //     </div>
      //   </div>
      //   <table className="table table-hover" style={{marginTop:'40px'}}>
      //     <thead>
      //       <tr>
      //         <th scope="col">#</th>
      //         <th scope="col">Visitor Name</th>
      //         <th scope="col">Host Name</th>
      //         <th scope="col">Purpose</th>
      //         <th scope="col">Date</th>
      //         <th scope="col">Time</th>
      //         <th scope="col">Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {this.state.appointments.map((appointments, index) => (
      //         <tr key={index}>
      //           <th scope="row">{index+1}</th>
      //           <td>{appointments.VisitorName}</td>
      //           <td>{appointments.HostName}</td>
      //           <td>{appointments.Purpose}</td>
      //           <td>{appointments.Date}</td>
      //           <td>{appointments.Time}</td>
      //           <td>
      //             <a className="btn btn-warning" href={`appointments/edit/${appointments._id}`}>
      //               <i className="fas fa-edit"></i>&nbsp;Edit
      //             </a>
      //             &nbsp;
      //             <a className="btn btn-danger" onClick={() => this.onDelete(appointments._id)}>
      //               <i className="far fa-trash-alt"></i>&nbsp;Delete
      //             </a>
      //           </td>
      //         </tr>
      //         ))
      //       }
      //     </tbody>
      //   </table>

      //   <button className='btn btn-success'>
      //   <a href={`appointments/add`} style={{textDecoration:'none', color:'white'}}>
      //     <i class="fa-regular fa-calendar-plus"></i>&nbsp;Add New
      //   </a>
      //   </button>

      // </div>
    )
  } 
}

