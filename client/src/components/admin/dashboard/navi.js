import React from 'react';
import logo from '../../../assets/logo.png';

export default function () {
  return (
    <div>
       <div id="mySidenav" class="sidenav">
            {/* <p class="logo">logo here</p> */}
            <img id='logo' src={logo}/>
            <a href={'/dashboard'} class="icon-a"><i class="fa fa-dashboard icons"></i>   Dashboard</a>
            <a href={'/visitors'} class="icon-a"><i class="fa fa-users icons"></i>   Visitors</a>
            <a href={'/hosts'} class="icon-a"><i class="fa-solid fa-user"></i>   Hosts</a>
            <a href={'/dashboard'} class="icon-a"><i class="fa-solid fa-calendar-days"></i> Host Schedule</a>
            <a href={'/appointments'} class="icon-a"><i class="fa-solid fa-list-check"></i>  Appointments</a>
            <a href={'/dashboard'} class="icon-a"><i class="fa-solid fa-user-gear"></i>   Manage Profile</a>
            <a href={'/dashboard'}class="icon-a"><i class="fa-solid fa-power-off"></i>   Logout</a>
        </div> 
    </div>
  )
}
