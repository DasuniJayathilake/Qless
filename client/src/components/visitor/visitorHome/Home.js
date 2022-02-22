import React from 'react';
import '../../../style/visitorHome/Home.css';
import home from '../../../assets/visitorHome/intro-img.svg';
import step1 from '../../../assets/visitorHome/schedule.png';
import step2 from '../../../assets/visitorHome/appointment.png';
import step3 from '../../../assets/visitorHome/qr.png';
import step4 from '../../../assets/visitorHome/meet.png';
import Navigation from '../VisitorNavigation/Navigation';
// import '../../../style/visitorHome/home.css';
import Footer from '../visitorFooter/Footer';

export default function Home() {

  return (
    <div className='homepage'>
        <Navigation />

        <section class="home" id="home">

            <div className="content">
                <h3>Meet Your <span id='host'>Service Provider...</span></h3>
                <p>We bring it super faster to meet your service providers in a most secure way. You don't have to worry about the waste of time anymore. Simply save a time slot for you! </p>
                <a href="#" className="btn" id='started'><span>Appoint Here</span></a>
            </div>

            <div className="image">
                <img src={home} alt="home-image"/>
            </div>

        </section>


        <div className="step-container">

            <h1 className="heading">how it <span>works</span></h1>

            <section className="steps">

                <div className="box">
                    <img src={step1} />
                    <h3>Check host schedule</h3>
                </div>

                <div className="box">
                    <img src={step2} />
                    <h3>Make appointments</h3>
                </div>

                <div className="box">
                    <img src={step3} />
                    <h3>QR code login</h3>
                </div>

                <div className="box">
                    <img src={step4} />
                    <h3>Meet your host</h3>
                </div>

            </section>

        </div>

        <Footer />

        <a href="#home" class="fas fa-angle-up" id="scroll-top"></a>

    </div>



  )
}
