import React from 'react';
import '../../../style/visitorContact/Contact.css';
import Navigation from '../VisitorNavigation/Navigation';
import Footer from '../visitorFooter/Footer';
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_sotv9sd', 
            'template_lsq9yj3', 
            e.target, 
            'user_5Rbd10XdzXtueAARO9BSb'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    }

    function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
    }

    inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    });


  return (
    <div>
        <Navigation />
        <section className="contact-container">

            <div className="basic-form">
                <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing.<br/>Saepe
                        dolorum adipisci recusandae dicta!
                    </p>

                <div className="info">
                    <div className="information">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>No.03, Kandy Rd, Colombo.</p>
                    </div>
                    <div className="information">
                        <i class="fa-solid fa-envelope"></i>
                        <p>example@gmail.com</p>
                    </div>
                    <div class="information">
                        <i class="fa-solid fa-phone"></i>
                        <p>071 00 00 111</p>
                    </div>
                </div>

                {/* <div className="social-media">
                    <p>Connect with us :</p>
                    <div className="social-icons">
                        <a href="#">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div> */}

            </div>

            <div className="contact-form">

                <form action="index.html" autoComplete="off" onSubmit={sendEmail}>

                    <h3 className="title">Contact us</h3>

                    <div className="input-container">
                        <input type="text" name="name" className="input" placeholder='Name'/>
                    </div>

                    <div className="input-container">
                        <input type="email" name="email" className="input" placeholder='Email'/>
                    </div>
                    
                    <div className="input-container textarea">
                        <textarea name="message" className="input" placeholder='Message...'></textarea>
                    </div>

                    <input type="submit" value="Send" className="btn" />

                </form>
            </div>
            </div>

        </section>
        <Footer />
    </div>
  )
}
