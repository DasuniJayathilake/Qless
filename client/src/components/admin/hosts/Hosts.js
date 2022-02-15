import React, { Component } from 'react';
import axios from 'axios';


export default class Hosts extends Component {
constructor(props){
  super(props);

  this.state = {
    hosts:[]
  };
}

componentDidMount(){
  this.retrieveHosts();
}

retrieveHosts(){
  axios.get("/hosts").then(res => {
    if(res.data.success){
      this.setState({
        hosts:res.data.existingHosts
      });
      console.log(this.state.hosts);
    }
  });
}

//delete button related

onDelete = (id) =>{
  axios.delete(`/hosts/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveHosts();
  })
}

//search bar related

filterData(hosts, searchKey){

  const result = hosts.filter((hosts) => 
    hosts.Name.toLowerCase().includes(searchKey) ||
    hosts.Department.toLowerCase().includes(searchKey) ||
    hosts.ContactNo.toLowerCase().includes(searchKey) ||
    hosts.Email.toLowerCase().includes(searchKey) ||
    hosts.NIC.toLowerCase().includes(searchKey) 
  )

  this.setState({hosts: result})
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("/hosts").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingHosts, searchKey)
    }
  });
}


  render() {
    return (
      <div className="container">
        {/* <p>hosts Details</p> */}
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
          <h4 className='text-center'>All Hosts</h4>
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
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Email Address</th>
              <th scope="col">NIC No.</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hosts.map((hosts, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`hosts/details/{details._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{hosts.Name}</a>
                </td>
                <td>{hosts.Department}</td>
                <td>{hosts.ContactNo}</td>
                <td>{hosts.Email}</td>
                <td>{hosts.NIC}</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
                    <label class="custom-control-label" for="customSwitch1"></label>
                  </div>
                </td>
                <td>
                  <a className="btn btn-warning" href={`hosts/edit/${hosts._id}`}>
                    <i className="fas fa-edit"></i>
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(hosts._id)}>
                    <i className="far fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>

        <button className='btn btn-success'>
        <a href={`hosts/add`} style={{textDecoration:'none', color:'white'}}>Add New Hosts</a>
        </button>

      </div>
    )
  } 
}

