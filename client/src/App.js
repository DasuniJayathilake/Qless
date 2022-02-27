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
import Login from './components/visitor/Login';
import Register from './components/visitor/Register';
import OtherInfo from './components/visitor/OtherInfo';
import Home from './components/visitor/visitorHome/Home';
import Contact from './components/visitor/visitorContact/Contact';
import Profile from './components/visitor/visitorProfile/Profile';
import EditProfile from './components/visitor/visitorProfile/EditProfile';
// import { useParams } from 'react-router';

// import Loginform from './components/imports/Loginform';
// import Registerform from './components/imports/Registerform';

export default function App() {
  return (
    <div>

      {/* <Navbar /> */}

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

        {/* Visitor module - login page */}
        <Route path="visitor/login/" element={<Login />}></Route>
        <Route path="visitor/register/" element={<Register />}></Route>
        {/* <Route path="visitor/register/other" element={<OtherInfo />}></Route> */}

        {/* visitor module - home page */}
        <Route path="visitor/home" element={<Home />}></Route>

        {/* visitor module - contactpage */}
        <Route path="visitor/contact" element={<Contact />}></Route>

        {/* visitor module - profile */}
        <Route path="visitor/profile" element={<Profile />}></Route>
        <Route path="visitor/editprofile" element={<EditProfile />}></Route>


      </Routes>
    </div>
  );
  
}


// ******************************************  ERROR ON NAVIGATION  ************************************
// import React from "react";
// import './style/App.css';
// import SideMenu, { menuItems } from "./components/admin/sideMenu/SideMenu";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from "react";

// const Dashboard = () => <h1>Dashboard</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;

// function App() {
//   const [inactive, setInactive] = useState(false);

//   return (
//     <div className="App">
//       <Router>
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />

//         <div className={`container ${inactive ? "inactive" : ""}`}>
//           {/* improvememt, not recorded in video, its just looping through menuItems
//           instead of hard coding all the routes */}
//           {menuItems.map((menu, index) => (
//             <>
//               <Route key={menu.name} exact={menu.exact} path={menu.to}>
//                 <h1>{menu.name}</h1>
//               </Route>
//               {menu.subMenus && menu.subMenus.length > 0
//                 ? menu.subMenus.map((subMenu, i) => (
//                     <Route key={subMenu.name} path={subMenu.to}>
//                       <h1>{subMenu.name}</h1>
//                     </Route>
//                   ))
//                 : null}
//             </>
//           ))}

//           {/* <Switch>
//             <Route exact path={"/"}>
//               <Dashboard />
//             </Route>
//             <Route exact path={"/content"}>
//               <Content />
//             </Route>
//             <Route path={"/content/courses"}>
//               <Courses />
//             </Route>
//             <Route path={"/content/videos"}>
//               <Videos />
//             </Route>
//             <Route path={"/design"}>
//               <Design />
//             </Route>
//             <Route exact path={"/content-2"}>
//               <Content2 />
//             </Route>
//             <Route path={"/content-2/courses"}>
//               <Courses2 />
//             </Route>
//             <Route path={"/content-2/videos"}>
//               <Videos2 />
//             </Route>
//             <Route path={"/design-2"}>
//               <Design2 />
//             </Route>
//           </Switch> */}
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


