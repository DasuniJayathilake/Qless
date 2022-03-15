import React, { Component } from 'react';
import axios from 'axios';
import Navi from '../navigation/navi';
import '../dashboard/Dashboard.css';


export default class Visitors extends Component {
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

//delete button related

onDelete = (id) =>{
  axios.delete(`/visitors/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveVisitors();
  })
}

//search bar related

filterData(visitors, searchKey){

  const result = visitors.filter((visitors) => 
    visitors.Name.toLowerCase().includes(searchKey) ||
    visitors.ContactNo.toLowerCase().includes(searchKey) ||
    visitors.Email.toLowerCase().includes(searchKey) ||
    visitors.NIC.toLowerCase().includes(searchKey) 
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
      <div>
        <Navi />

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
                      <td>{visitors.Name}</td>
                      <td>{visitors.ContactNo}</td>
                      <td className='email-text'>{visitors.Email}</td>
                      <td>{visitors.NIC}</td>
                      <td>
                        <a className="btn btn-primary btn-action" href={`visitors/details/{details._id}`}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                        &nbsp;
                        <a className="btn btn-warning btn-action" href={`visitors/edit/${visitors._id}`} onClick={() => this.onDelete(visitors._id)}>
                          <i className="fas fa-edit"></i>
                        </a>
                        &nbsp;
                        <a className="btn btn-danger btn-action" href="#" onClick={() => this.onDelete(visitors._id)}>
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>

              <button className='btn btn-add-new'>
              <a href={`visitors/add`} >
                <i class="fa-solid fa-user-plus"></i>&nbsp;Add New
              </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  } 
}

