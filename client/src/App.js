import React from 'react';
import './style/App.css'
import { Route, Routes } from 'react-router-dom';
// import { useParams } from 'react-router';

// exact path import
import Menu from './components/Menu';

// admin module imports
import AddVisitor from './components/admin/visitors/AddVisitor';
import EditVisitor from './components/admin/visitors/EditVisitor';
import VisitorDetails from './components/admin/visitors/VisitorDetails';
import Visitors from './components/admin/visitors/Visitors';
import DashBoard from './components/admin/dashboard/DashBoard';
import Hosts from './components/admin/hosts/Hosts';
import AddHost from './components/admin/hosts/AddHost';
import Appointments from './components/admin/appointments/Appointments';
import AddAppointment from './components/admin/appointments/AddAppointment';

// visitor module imports
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

// Host module imports
import HostDashboard from './components/host/dashboard/HostDashboard';
import HostVisitors from './components/host/visitors/HostVisitors';
import HostAppointments from './components/host/hostAppointments/HostAppointments';

export default function App() {
  return (
    <div>

      {/* <Navbar /> */}

      <Routes>

        <Route exact path="/" element={<Menu />}></Route>


        {/* **************************** Admin module routes ************************** */}

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



        {/* **************************** Visitor module routes ************************** */}

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


        {/* **************************** Host module routes ************************** */}

        {/* Admin module - dashboard */}
        <Route path="host/dashboard/" element={<HostDashboard />}></Route>
        <Route path="host/hostvisitors/" element={<HostVisitors />}></Route>
        <Route path="host/hostappointments/" element={<HostAppointments />}></Route>

      </Routes>
    </div>
  );
  
}


