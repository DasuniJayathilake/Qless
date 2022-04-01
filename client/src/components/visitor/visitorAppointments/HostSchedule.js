import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import coverimg from '../../../assets/visitor-appointments.png';
import HostsDetails from './HostsDetails';
import '../../../style/visitorAppointments/visitorAppointments.css';

// // import SearchBar from './SearchBar';

// export default function HostSchedule() {
//   return (
//     <div>
//         <Navigation />
//         <br/><br/>
//         <div id='visitorAppointments'>
//             <div className='container'>
//                 <div className='row login-box'>

//                     {/* base-login */}

//                     <div className='col-sm-5 bg-left align-self-center'>
//                         <div className='info'>
//                             <div id='user'>Host Schedule</div>
                                
//                                 {/* <SearchBar /> */}
//                             {/* <div className='cover-img'>
//                                 <img src={coverimg} />
//                             </div> */}
//                             {/* <div className='btn-section clearfix'>
//                             <a href={'/visitor/appointments'} className='nav-link link-btn btn-primary default-bg'><span>Appoint</span></a>
//                             <a href={'/visitor/appointmentHistory'} className='nav-link link-btn btn-primary default-bg'><span>Schedule</span></a>
//                             </div> */}
//                         </div>
//                     </div>

//                     {/* base-login */}

//                     {/* login */}

//                     <div className='col-sm-7 bg-color'>
//                         <div className='form-section'>
//                             <HostsDetails />
//                         </div>
//                     </div>

//                     {/* login */}


//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </div>
//   )
// }





export default class HostSchedule extends Component{

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
                <Navigation />
                <br/><br/>
                <div id='visitorAppointments'>
                    <div className='container'>
                        <div className='row login-box'>

                            {/* base-login */}

                            <div className='col-sm-5 bg-left align-self-center'>
                                <div className='info'>
                                    <div id='user'>Host Schedule</div>
                                        
                                    {/* ******************** searchbar *********************** */}

                                    <div className='searchbar'>
                                        <input
                                        className='form-control searchbar'
                                        type='search'
                                        placeholder="&#xF002;"              
                                        name='searchQuery'
                                        onChange={this.handleSearchArea}
                                        />
                                    </div>

                                    {/* ******************** searchbar *********************** */}

                                    <div className='cover-img'>
                                        <img src={coverimg} />
                                    </div>

                                    {/* <div className='btn-section clearfix'>
                                    <a href={'/visitor/appointments'} className='nav-link link-btn btn-primary default-bg'><span>Appoint</span></a>
                                    <a href={'/visitor/hostSchedule'} className='nav-link link-btn btn-primary default-bg'><span>Schedule</span></a>
                                    </div> */}

                                </div>
                            </div>

                            {/* base-login */}

                            {/* login */}

                            <div className='col-sm-7 bg-color'>
                                <div className='form-section'>
                                    {/* <HostsDetails /> */}
                                    <div className='hostschedule'>
                                        <div className='host-container'>  
                                            <table className='hostschedule'>
                                                <tbody>
                                                    {this.state.hosts.map((hosts, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                            <div className='host'>
                                    
                                                                <div className='host-preview'>
                                                                <th id='gohomegota' scope="row">{index+1}</th>
                                                            
                                                                    <h2>{hosts.Name}</h2>
                                                                    <a href="#">See More <i class="fas fa-chevron-right"></i></a>
                                                                </div>

                                                                <div className='host-info'>
                                                                    <h6 className='al-left'>{hosts.Department}</h6>
                                                                    <h2 className='al-left'>Software Engineer</h2>
                                                                    <div className="row ap-detils">
                                                                        <div className="col-md-2"><button className='btn btn-day'>Mon</button></div>
                                                                        <div className="col-md-2"><button className='btn btn-day'>Tue</button></div>
                                                                        <div className="col-md-2"><button className='btn btn-day'>Wed</button></div>
                                                                        <div className="col-md-2"><button className='btn btn-day'>Thu</button></div>
                                                                        <div className="col-md-2"><button className='btn btn-day'>Fri</button></div>
                                                                        <br/>
                                                                    </div>
                                                                    <h5 className='al-left time'>8.00 AM To 5.00 PM</h5>
                                                                    <a href={'/visitor/appointments'} class="btn btn-host"><i class="fa-regular fa-calendar-plus"></i></a>
                                                                </div>

                                                            </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
                                                </tbody>
                                            </table>        
                                        </div>   
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
}
