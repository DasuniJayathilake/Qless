import React from 'react';
import logo from '../../../assets/logo.png';

export default function HostNavigation() {
  return (
    <div>
       <div id="hostsidenav" class="sidenav">
            {/* <p class="logo">logo here</p> */}
            <img id='logo' src={logo}/>
            <a href={'/host/dashboard/'} class="icon-a"><i class="fa fa-dashboard icons"></i>   Dashboard</a>
            <a href={'/host/hostappointments/'} class="icon-a"><i class="fa-solid fa-list-check"></i>  Appointments</a>
            <a href={'/host/hostvisitors'} class="icon-a"><i class="fa fa-users icons"></i>   Visitors</a>
            <a href={'/host/dashboard/'} class="icon-a"><i class="fa-solid fa-calendar-days"></i> My Schedule</a>
            <a href={'/host/dashboard/'} class="icon-a"><i class="fa-solid fa-user-gear"></i>   Manage Profile</a>
            <a href={'/host/dashboard/'}class="icon-a"><i class="fa-solid fa-power-off"></i>   Logout</a>
        </div> 
    </div>
  )
}
