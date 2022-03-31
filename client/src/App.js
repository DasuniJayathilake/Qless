import React from 'react';
import './style/App.css'
import { Route, Routes } from 'react-router-dom';

import AddVisitor from './components/admin/visitors/AddVisitor';
import EditVisitor from './components/admin/visitors/EditVisitor';
// import Navbar from './components/admin/Navbar';
import VisitorDetails from './components/admin/visitors/VisitorDetails';
import Visitors from './components/admin/visitors/Visitors';
import DashBoard from './components/admin/dashboard/DashBoard';
import Hosts from './components/admin/hosts/Hosts';
import AddHost from './components/admin/hosts/AddHost';
import Appointments from './components/admin/appointments/Appointments';
import AddAppointment from './components/admin/appointments/AddAppointment';
import Login from './components/visitor/visitorLogin/Login';
import Register from './components/visitor/visitorLogin/Register';
import Home from './components/visitor/visitorHome/Home';
import Contact from './components/visitor/visitorContact/Contact';
import Profile from './components/visitor/visitorProfile/Profile';
import EditProfile from './components/visitor/visitorProfile/EditProfile';
import VisitorAppointments from './components/visitor/visitorAppointments/VisitorAppointments';
import VisitorAppoinmentHistory from './components/visitor/visitorAppointments/VisitorAppoinmentHistory';
import Registration from './components/visitor/visitorLogin/Registration';
import HostSchedule from './components/visitor/visitorAppointments/HostSchedule';
// import { useParams } from 'react-router';
import Menu from './components/Menu';

export default function App() {
  return (
    <div>

      {/* <Navbar /> */}

      <Routes>

        <Route exact path="/" element={<Menu />}></Route>

        {/* Admin module - dashboard */}
        <Route path="dashboard/" element={<DashBoard />}></Route>

        {/* Admin module - Visitor part */}
        <Route path="visitors/" element={<Visitors />}></Route>
        <Route path="visitors/add" element={<AddVisitor />}></Route>
        <Route path="visitors/edit/:id" element={<EditVisitor />}></Route>
        <Route path="visitors/details/:id" element={<VisitorDetails />}></Route>

        {/* Admin module - host part */}
        <Route path="hosts/" element={<Hosts />}></Route>
        <Route path="hosts/add" element={<AddHost />}></Route>
        {/* <Route path="visitors/edit/:id" element={<EditVisitor />}></Route> */}
        {/* <Route path="visitors/details/:id" element={<VisitorDetails />}></Route> */}

        {/* Admin module - appointments part */}
        <Route path="appointments/" element={<Appointments />}></Route>
        <Route path="appointments/add" element={<AddAppointment />}></Route>
        {/* <Route path="visitors/edit/:id" element={<EditVisitor />}></Route>
        <Route path="visitors/details/:id" element={<VisitorDetails />}></Route> */}

        {/* Visitor module - login page */}
        <Route path="visitor/login/" element={<Login />}></Route>
        <Route path="visitor/register/" element={<Registration />}></Route>
        {/* <Route path="visitor/register/other" element={<OtherInfo />}></Route> */}

        {/* visitor module - home page */}
        <Route path="visitor/home" element={<Home />}></Route>

        {/* visitor module - contactpage */}
        <Route path="visitor/contact" element={<Contact />}></Route>

        {/* visitor module - profile */}
        <Route path="visitor/profile" element={<Profile />}></Route>
        <Route path="visitor/editprofile" element={<EditProfile />}></Route>

        {/* visitor module - appointments */}
        <Route path="visitor/appointments" element={<VisitorAppointments />}></Route>
        <Route path="visitor/appointmentHistory" element={<VisitorAppoinmentHistory />}></Route>
        <Route path="visitor/hostSchedule" element={<HostSchedule />}></Route>

      </Routes>
    </div>
  );
  
}


