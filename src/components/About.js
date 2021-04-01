import React from "react";
import './About.css';
import photo from '../assets/biopic.jpg';
import resume from '../assets/wanalyst.pdf'

function About() {
  return(<>
  <div className="container">
    <div className="row">

      <div className="col-md-auto">
        <h1>Hello World</h1>
        <p>
        I was born in Tel-Aviv, Israel and currently living in Canada. I have lived in five different cities across the globe and I speak Spanish, and Portuguese. 
        I've completed my undergraduate at York University in Political Science and earned a certification in Human Resource Management at the Eli School of 
        Buisness at Michigan State University. I have worked as a Worforce Analyst for a Canadian Airline, and I have done philanthropy work for charities in the GTA and in the poorest parts of Peru and Brazil. 
        I am currently studying coding bootcamp at the University of Toronto in hopes of using coding for outreach work.
        </p>
      </div>

      <div className="col-md-auto">
        <img className="img-fluid" src={photo} alt="biopic" />
     </div>
    
      <div className="prof">
        <button><a className="linkdec" href={resume} target="_blank" rel="nonreferrer">My Resume</a></button>
      </div>
      <h2>Social Media</h2>
      <a href="https://github.com/cycy6"></a>
      <i className="fab fa-github icons2"></i>
      <a href="www.linkedin.com/in/cyril-g-0824291b0"></a>
      <i className="fab fa-github icons2"></i>
    </div>
 </div>
 </>
  )
}

export default About;