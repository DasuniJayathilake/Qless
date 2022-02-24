import React from 'react';
import '../../../style/visitorHome/Home.css';

export default function Footer() {
  return (
    <div>

        <section id="footer">

            <div class="share">
                <a href={'contact'} class="media"><i class="fa-solid fa-envelope"></i></a>
                <a href={'contact'}  class="media"><i class="fa-solid fa-phone"></i></a>
                <a href={'contact'}  class="media"><i class="fa-solid fa-location-dot"></i></a>
            </div>
            <h1 class="credit"> Created by <span> Dasuni Jayathilake </span> | All rights reserved! </h1>
        </section>

    </div>
  )
}
