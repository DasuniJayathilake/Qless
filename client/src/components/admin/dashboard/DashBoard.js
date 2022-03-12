import React, { Component } from 'react';
import SideNav from '../../imports/SideNav/SideNav';
import './Dashboard.css';
import './navi';
import Navi from './navi';


export default class dashboard extends Component {

  //    $(".nav").click(function(){
	//     $("#mySidenav").css('width','70px');
	//     $("#main").css('margin-left','70px');
	//     $(".logo").css('visibility', 'hidden');
	//     $(".logo span").css('visibility', 'visible');
	//      $(".logo span").css('margin-left', '-10px');
	//      $(".icon-a").css('visibility', 'hidden');
	//      $(".icons").css('visibility', 'visible');
	//      $(".icons").css('margin-left', '-8px');
	//       $(".nav").css('display','none');
	//       $(".nav2").css('display','block');
	//   });

	// $(".nav2").click(function(){
	//     $("#mySidenav").css('width','300px');
	//     $("#main").css('margin-left','300px');
	//     $(".logo").css('visibility', 'visible');
	//      $(".icon-a").css('visibility', 'visible');
	//      $(".icons").css('visibility', 'visible');
	//      $(".nav").css('display','block');
	//       $(".nav2").css('display','none');
	//  });

    render() {
        return (
          <div id="dashboard">
            <Navi />
            {/* <SideNav /> */}
            <div id="main">

              <div class="head"> 
                <div class="col-div-6">
                  <span class="nav"  >☰ Dashboard</span>
                  <span class="nav2"  >☰ Dashboard</span>
                </div>
              
                <div class="col-div-6">
                {/* <div class="profile">
                  <img src="images/user.png" class="pro-img" />
                  <p>Admin Name <span>Admin Type</span></p>
                </div> */}
                </div>

                <div class="clearfix"></div>
              </div>

              <div class="clearfix"></div>
              <br/>
              
              <div class="col-div-3">
                <div class="dash-box">
                  <p>88<br/><span>ALl Visitors</span></p>
                  <i class="fa fa-users dash-box-icon"></i>
                </div>
              </div>
              <div class="col-div-3">
                <div class="dash-box">
                  <p>35<br/><span>All Hosts</span></p>
                  <i class="fa-solid fa-user dash-box-icon"></i>
                </div>
              </div>
              <div class="col-div-3">
                <div class="dash-box">
                  <p>99<br/><span>This Week</span></p>
                  <i class="fa fa-tasks dash-box-icon"></i>
                </div>
              </div>
              <div class="col-div-3">
                <div class="dash-box">
                  <p>15<br/><span>This Month</span></p>
                  <i class="fa fa-tasks dash-box-icon"></i>
                </div>
              </div>
              <div class="clearfix"></div>
              <br/><br/>
              <div class="col-div-8">
                <div class="dash-box-8">
                <div class="dash-content-box">
                  <p>Appointments for Today <span>See All</span></p>
                  <br/>

            <table>
              <tr>
                <th>Time</th>
                <th>Host</th>
                <th>Visitor</th>
                <th>Purpose</th>
              </tr>
              <tr>
                <td>08.00</td>
                <td>Maria Anders</td>
                <td>Jeff Johnson</td>
                <td>Meeting</td>
              </tr>
              <tr>
                <td>15.00</td>
                <td>Francisco Chang</td>
                <td>Alen Lee</td>
                <td>Discussion</td>
              </tr>
              <tr>
                <td>11.00</td>
                <td>Roland Mendel</td>
                <td>Nicol Smith</td>
                <td>Meeting</td>
              </tr>
            </table>

                </div>
              </div>
              </div>

              <div class="col-div-4">
                <div class="dash-box-4">
                <div class="dash-content-box">
                  <p>Total Sale <span>See All</span></p>

                  <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle"> 70% </div>
                </div>
              </div>
                </div>
              </div>
              </div>
                
              <div class="clearfix"></div>
            </div>

          </div>
        );
    }
}

