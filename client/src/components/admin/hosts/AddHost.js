import React, { Component } from 'react';
import axios from 'axios';
import '../../../style/Admin/AddNew.css';
import Navi from '../dashboard/navi';

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

      <div>
        <Navi />
        <div id='main'>
          <div id='Admin-AddNew'>
              <div className='container'>
                  <div className='row login-box'>

                      {/* base-login */}

                      <div className='col-sm-5 bg-left align-self-center'>
                        <button className='btn btn-back'><i class="fa-solid fa-left"></i></button>
                          <div className='info'>
                            <div id='user'>Add New Host</div>
                            <i class="fa-solid fa-user-plus img-icon"></i>
                            <br/>
                            <a href={'/hosts'} className="btn btn-back"><i class="fa-solid fa-angles-left"></i>&nbsp;Back</a>
                          </div>
                      </div>

                      {/* base-login */}

                      {/* login */}

                      <div className='col-sm-7 bg-color align-self-center'>
                          <div className='form-section'>
                            <div className='title'>
                                <h3>Host Details</h3>
                            </div>

                            <div className='login-inner-form'>

                              <form className='need-validation' noValidate>

                                <div className='form-group form-box'>
                                  <input 
                                  type='text'
                                  className='form-control input-text'
                                  name='name'
                                  placeholder='Name'
                                  value={this.state.name}
                                  onChange={this.handleInputChange}/>
                                  <i className='icon user'></i>
                                </div>

                                <div className='form-group form-box'>
                                <input
                                  className='form-control input-text'
                                  list='datalistOptions'
                                  name='department'
                                  placeholder='Department'
                                  value={this.state.department}
                                  onChange={this.handleInputChange}/>
                                  <datalist id="datalistOptions">
                                    <option value="Department 01"/>
                                    <option value="Department 02"/>
                                    <option value="Department 03"/>
                                    <option value="Department 04"/>
                                    <option value="Department 05"/>
                                  </datalist>
                                  <i className='icon user'></i>
                                </div>

                                <div className='form-group form-box'>
                                  <input 
                                  type='text'
                                  className='form-control input-text'
                                  name='contact'
                                  placeholder='Contact No.'
                                  value={this.state.contact}
                                  onChange={this.handleInputChange}/>
                                  <i className='icon contact'></i>
                                </div>

                                <div className='form-group form-box' >
                                  <input 
                                  type='email'
                                  className='form-control input-text'
                                  name='email'
                                  placeholder='Email Address'
                                  value={this.state.email}
                                  onChange={this.handleInputChange}/>
                                  <i className='icon email'></i>
                                </div>

                                <div className='form-group form-box' >
                                  <input 
                                  type='text'
                                  className='form-control input-text'
                                  name='nic'
                                  placeholder='NIC No.'
                                  value={this.state.nic}
                                  onChange={this.handleInputChange}/>
                                  <i className='icon nic'></i>
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
        </div>
      </div>

    );
  }
}
