import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddVisitor from './components/admin/visitors/AddVisitor';
import EditVisitor from './components/admin/visitors/EditVisitor';
// import Navbar from './components/admin/Navbar'
import VisitorDetails from './components/admin/visitors/VisitorDetails';
import Visitors from './components/admin/visitors/Visitors';
import DashBoard from './components/admin/dashboard/DashBoard';
import Hosts from './components/admin/hosts/Hosts';
import AddHost from './components/admin/hosts/AddHost';
import Appointments from './components/admin/appointments/Appointments';
import AddAppointment from './components/admin/appointments/AddAppointment';

export default function App() {
  return (
    <div>

      <Routes>

      <Route exact path="/" element={<DashBoard />}></Route>

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

      </Routes>

    </div>
  );
  
}
