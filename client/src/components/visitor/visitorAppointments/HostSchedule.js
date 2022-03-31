import React from 'react';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import coverimg from '../../../assets/visitor-appointments.png';
import HostsDetails from './HostsDetails';
// import SearchBar from './SearchBar';

export default function HostSchedule() {
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
                            <div id='user'>Host Schedule</div>
                                {/* <SearchBar /> */}
                            {/* <div className='cover-img'>
                                <img src={coverimg} />
                            </div> */}
                            {/* <div className='btn-section clearfix'>
                            <a href={'/visitor/appointments'} className='nav-link link-btn btn-primary default-bg'><span>Appoint</span></a>
                            <a href={'/visitor/appointmentHistory'} className='nav-link link-btn btn-primary default-bg'><span>Schedule</span></a>
                            </div> */}
                        </div>
                    </div>

                    {/* base-login */}

                    {/* login */}

                    <div className='col-sm-7 bg-color'>
                        <div className='form-section'>
                            <HostsDetails />
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
