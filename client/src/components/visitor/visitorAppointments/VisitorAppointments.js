import React from 'react';
import '../../../style/visitorAppointments/visitorAppointments.css';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import searchBar from './searchBar';

export default function VisitorAppointments() {
  return (
    <div>
        <Navigation />
        <br/><br/>
        <div id='visitorAppointments'>
            <div className='container'>
                <div className='row login-box'>

                    {/* base-login */}

                    <div className='col-sm-5 bg-left align-self-center'>
                        <div className='info'>
                          <searchBar />
                          <div id='user'>Appointments</div>
                          <div className='btn-section clearfix'>
                            <a href={'/visitor/appointments'} className='nav-link link-btn btn-primary default-bg'><span>New</span></a>
                            <a href={'/visitor/appointmentHistory'} className='nav-link link-btn btn-primary default-bg'><span>History</span></a>
                          </div>
                        </div>
                    </div>

                    {/* base-login */}

                    {/* login */}

                    <div className='col-sm-7 bg-color'>
                        <div className='form-section'>
                          
                          <searchBar />
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
