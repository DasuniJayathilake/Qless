import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default class EditVisitor extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
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

    const params = useParams();

    e.preventDefault();
    const id=this.props.match.params.id;

    const {name, contact, email, nic} = this.state;

    const data = {
      Name: name,
      ContactNo: contact,
      Email: email,
      NIC: nic
    }

    console.log(data);

    axios.put(`/visitors/update/${id}`, data).then((res) => {
      if(res.data.success){
        alert("Details Updated Successfully");
        this.setState(
          {
            Name:"",
            ContactNo:"",
            Email:"",
            NIC:""
          }
        )
      }
    })

  }
  
  componentDidMount(){

    const id=this.props.match.params.id;

    axios.get(`/visitors/${id}`).then((res) => {
      if(res.data.success){
        this.setState({
          Name: res.data.visitors.Name,
          ContactNo: res.data.visitors.ContactNo,
          Email: res.data.visitors.Email,
          NIC: res.data.visitors.NIC
        });

        console.log(this.state.details);
      }
    });
  }
  
  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>Edit Visitor Details</h1>

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
                &nbsp; Update
              </button>

            </form>
        </div>
    );
  }
}


