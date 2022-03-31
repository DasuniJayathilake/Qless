import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout(props) {
  return (
    <div>
        <Link to="/" onClick={props.onLogout} className="nav-link">
          <i class="fa-solid fa-power-off"></i>
        </Link>
    </div>
  )
}
