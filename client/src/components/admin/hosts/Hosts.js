import React, { Component } from 'react';
import axios from 'axios';
import Navi from '../navigation/navi';

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

      <div>
        <Navi />

        <div id='main'>
         
              <div class="head"> 
                <div class="col-div-6">
                  <span class="nav"  >☰ Host</span>
                  <span class="nav2"  >☰ Hosts</span>
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
              <p>All Host Details</p>

              <table className="table detail-table" style={{marginTop:'40px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">NIC No.</th>
                    {/* <th scope="col">Status</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.hosts.map((hosts, index) => (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                        <td>{hosts.Name}</td>
                        <td>{hosts.Department}</td>
                        <td>{hosts.ContactNo}</td>
                        <td className='email-text'>{hosts.Email}</td>
                        <td>{hosts.NIC}</td>
                        <td>
                          <a className="btn btn-primary btn-action" href={`hosts/details/{details._id}`}>
                            <i class="fa-regular fa-eye"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-warning btn-action" href={`hosts/edit/${hosts._id}`} onClick={() => this.onDelete(hosts._id)}>
                            <i className="fas fa-edit"></i>
                          </a>
                          &nbsp;
                          <a className="btn btn-danger btn-action" href="#" onClick={() => this.onDelete(hosts._id)}>
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>

              <button className='btn btn-add-new'>
              <a href={`hosts/add`} >
                <i class="fa-solid fa-user-plus"></i>&nbsp;Add New
              </a>
              </button>
            </div>
          </div>

        </div>
      </div>

      // <div className="container">
      //   {/* <p>hosts Details</p> */}
      //   <div className='row'>
      //     <div className='col-lg-9 mt-2 mb-2'>
      //     <h4 className='text-center'>All Hosts</h4>
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
      //         <th scope="col">Name</th>
      //         <th scope="col">Department</th>
      //         <th scope="col">Contact No.</th>
      //         <th scope="col">Email Address</th>
      //         <th scope="col">NIC No.</th>
      //         <th scope="col">Status</th>
      //         <th scope="col">Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {this.state.hosts.map((hosts, index) => (
      //         <tr key={index}>
      //           <th scope="row">{index+1}</th>
      //           <td>
      //             <a href={`hosts/details/{details._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{hosts.Name}</a>
      //           </td>
      //           <td>{hosts.Department}</td>
      //           <td>{hosts.ContactNo}</td>
      //           <td>{hosts.Email}</td>
      //           <td>{hosts.NIC}</td>
      //           <td>
      //             <div class="custom-control custom-switch">
      //               <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
      //               <label class="custom-control-label" for="customSwitch1"></label>
      //             </div>
      //           </td>
      //           <td>
      //             <a className="btn btn-warning" href={`hosts/edit/${hosts._id}`}>
      //               <i className="fas fa-edit"></i>
      //             </a>
      //             &nbsp;
      //             <a className="btn btn-danger" href="#" onClick={() => this.onDelete(hosts._id)}>
      //               <i className="far fa-trash-alt"></i>
      //             </a>
      //           </td>
      //         </tr>
      //         ))
      //       }
      //     </tbody>
      //   </table>

      //   <button className='btn btn-success'>
      //   <a href={`hosts/add`} style={{textDecoration:'none', color:'white'}}>
      //     <i class="fa-solid fa-user-plus"></i>&nbsp;Add New
      //   </a>
      //   </button>

      // </div>
    )
  } 
}

