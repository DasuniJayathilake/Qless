import React from 'react';
import '../../../style/visitorHome/Home.css';
import logo from '../../../assets/logo.png';

export default function Navigation() {
  return (
    <div>
        <header>

            <a href="#" class="logo">
              <img src={logo} />
            </a>

            <div id="menu-bar" class="fas fa-bars"></div>

            <nav class="navbar">
                <a href={'home'}>Home</a>
                <a href="">Host Schedule</a>
                <a href="">Appointments</a>
                <a href="">My profile</a>
                <a href={'contact'}>Contact Us</a>
            </nav>

        </header>

    </div>
  )
}
