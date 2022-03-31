import React from 'react';
import '../../../style/visitorAppointments/visitorAppointments.css';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import coverimg from '../../../assets/Screenshot1.png';
import Hosts from './Hosts';

export default function VisitorAppoinmentHistory() {
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
                                <div id='user'>Appointment History</div>
                                <div className='cover-img'>
                                    <img src={coverimg} />
                                </div>
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
                                <Hosts />
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
