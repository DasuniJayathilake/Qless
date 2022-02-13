import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
  
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">&nbsp;&nbsp;Q-less</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item active">
                    <a className="nav-link" href={'/'}>Dashboard <span className="sr-only">(current)</span></a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href={'visitors/'}>Visitors </a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href={'hosts/'}>Hosts <span className="sr-only">(current)</span></a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href={'appointments/' }>Appointments <span className="sr-only">(current)</span></a>
                  </li>


                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Manage Profile</a>
                  </li>

                </ul>
              </div>
            </nav>
        </div>
    );
  }
}