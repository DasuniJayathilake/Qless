import React, { Component } from 'react';
import axios from 'axios';
import HostNavigation from '../navigation/HostNavigation';
import '../../../style/Host/Host.css';


export default class HostVisitors extends Component {
constructor(props){
  super(props);

  this.state = {
    visitors:[]
  };
}

componentDidMount(){
  this.retrieveVisitors();
}

retrieveVisitors(){
  axios.get("/visitors").then(res => {
    
    if(res.data.success){
      this.setState({
        visitors:res.data.existingVisitors
      });
      console.log(this.state.visitors);
    }
  });
}


//search bar related

filterData(visitors, searchKey){

  const result = visitors.filter((visitors) => 
    visitors.name.toLowerCase().includes(searchKey) ||
    visitors.contact.toLowerCase().includes(searchKey) ||
    visitors.email.toLowerCase().includes(searchKey) ||
    visitors.nic.toLowerCase().includes(searchKey) 
  )
  

  this.setState({visitors: result})
}

handleSearchArea = (e) => {
  // console.log(e.currentTarget.value);
  const searchKey = e.currentTarget.value;

  axios.get("/visitors").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingVisitors, searchKey)
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
                  <span class="nav"  >☰ Visitors</span>
                  <span class="nav2"  >☰ Visitors</span>
                </div>
              
                <div class="col-div-6">
                {/* <div class="profile">
                  <img src="images/user.png" class="pro-img" />
                  <p>Admin Name <span>Admin Type</span></p>
                </div> */}
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
              <p>All Visitor Details</p>
              

              <div className='table-wrapper'>
                <table className="table detail-table" style={{marginTop:'40px'}}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Contact No.</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">NIC No.</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.visitors.map((visitors, index) => (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        {/* <td>
                          <a href={`visitors/details/{details._id}`} style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>{visitors.Name}</a>
                        </td> */}
                        <td>{visitors.name}</td>
                        <td>{visitors.contact}</td>
                        <td className='email-text'>{visitors.email}</td>
                        <td>{visitors.nic}</td>
                        <td>
                          <a className="btn btn-primary btn-action" href={`visitors/details/{details._id}`}>
                            <i class="fa-regular fa-eye"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-danger btn-action">
                            <i class="fa-regular fa-eye-slash"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-warning btn-action" href="#">
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

