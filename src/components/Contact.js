import React from "react";
import './Contact.css'

function Contact() {
    return (

    <div className="container">

        <h2>Let's Work Together</h2>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label font">Full Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label font">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label font">Your Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

    </div>

)}

export default Contact;