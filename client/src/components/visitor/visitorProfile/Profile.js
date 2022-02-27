import React from 'react';
import '../../../style/visitorProfile/Profile.css';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import profile from '../../../assets/profile.jpg';

export default function Profile() {
  return (
    <div>
        <Navigation />
        <br/><br/>
        <div id='profile'>
            <div className='container'>
                <div className='row login-box'>

                    {/* base-login */}

                    <div className='col-sm-5 bg-img align-self-center'>
                        <div className='info'>
                            <div className='profile-img'>
                                <img src={profile} />
                            </div>
                            <div id='user'>Dasuni Jayathilake</div>
                            <div className='btn-section clearfix'>
                                <a href={'/visitor/profile'} className='nav-link link-btn btn-primary default-bg'><span>View</span></a>
                                <a href={'/visitor/editprofile'} className='nav-link link-btn btn-primary default-bg'><span>Edit</span></a>
                            </div>
                        </div>
                    </div>

                    {/* base-login */}

                    {/* login */}

                    <div className='col-sm-7 bg-color'>
                        <div className='form-section'>
                            <div className='title'>
                                <h3>my profile</h3>
                            </div>

                            <div className='profile-details'>
                            <hr/>

                            <dl class="row">

                                <dt className="col-sm-5">Full Name</dt>
                                <dd className="col-sm-7">Dasuni Jayathilake</dd>

                                <dt className="col-sm-5">Email Address</dt>
                                <dd className="col-sm-7 email-text">dasunijayathilake@gmail.com</dd>

                                <dt className="col-sm-5">Contact No.</dt>
                                <dd className="col-sm-7">077 00 00 111</dd>

                                <dt className="col-sm-5">NIC No.</dt>
                                <dd className="col-sm-7">975941400V</dd>

                            </dl>

                            <hr/>
                            </div>

                        </div>
                    </div>

                    {/* login */}


                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
