import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';



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
      <div className="container">
        {/* <p>Visitor Details</p> */}
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
          <h1>All Visitors</h1>
          </div>
          <div className='col-lg-3 mt-2 mb-2'>
            <input
            className='form-control'
            type='search'
            placeholder='Search'              
            name='searchQuery'
            onChange={this.handleSearchArea}/>
          </div>
        </div>
        <table className="table table-hover" style={{marginTop:'40px'}}>
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
                <td>
                  <a href={`visitors/details/{details._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{visitors.Name}</a>
                </td>
                <td>{visitors.ContactNo}</td>
                <td>{visitors.Email}</td>
                <td>{visitors.NIC}</td>
                <td>
                  <a className="btn btn-warning" href={`visitors/edit/${visitors._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(visitors._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>

        <button className='btn btn-success'>
        <a href={`visitors/add`} style={{textDecoration:'none', color:'white'}}>Add New Visitor</a>
        </button>

      </div>
    )
  } 
}

