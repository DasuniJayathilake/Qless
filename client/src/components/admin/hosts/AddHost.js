import React, { Component } from 'react';
import axios from 'axios';

export default class AddHost extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
      department:"",
      contact:"",
      email:"",
      nic:""
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

    const {name, department, contact, email, nic} = this.state;

    const data = {
      Name: name,
      Department: department,
      ContactNo: contact,
      Email: email,
      NIC: nic
    }

    console.log(data);

    axios.post("/hosts/save", data).then((res) => {
      if(res.data.success){
        alert("New Host Added Successfully");
        this.setState(
          {
            Name:"",
            Department:"",
            ContactNo:"",
            Email:"",
            NIC:""
          }
        )
      }
    })

  }


  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>Add New Host</h1>

            <form className='need-validation' noValidate>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Name</label>
                <input 
                type='text'
                className='form-control'
                name='name'
                placeholder='Enter Name'
                value={this.state.name}
                onChange={this.handleInputChange}/>
              </div>
              
              {/* <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Department</label>
                <input 
                type='text'
                className='form-control'
                name='department'
                placeholder='Enter Department'
                value={this.state.department}
                onChange={this.handleInputChange}/>
              </div> */}

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label for="exampleDataList" class="form-label">Department</label>
                <input
                className='form-control'
                list='datalistOptions'
                name='department'
                placeholder='Choose the Department'
                value={this.state.department}
                onChange={this.handleInputChange}/>
                <datalist id="datalistOptions">
                  <option value="Department 01"/>
                  <option value="Department 02"/>
                  <option value="Department 03"/>
                  <option value="Department 04"/>
                  <option value="Department 05"/>
                </datalist>
                  
              </div>


              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Contact No.</label>
                <input 
                type='text'
                className='form-control'
                name='contact'
                placeholder='Enter Contact No.'
                value={this.state.contact}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Email Address</label>
                <input 
                type='text'
                className='form-control'
                name='email'
                placeholder='Enter Email Address'
                value={this.state.email}
                onChange={this.handleInputChange}/>
              </div>

              <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>NIC No.</label>
                <input 
                type='text'
                className='form-control'
                name='nic'
                placeholder='Enter NIC No.'
                value={this.state.nic}
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
