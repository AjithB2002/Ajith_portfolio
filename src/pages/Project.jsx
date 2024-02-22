import React from "react";
import '../pages/Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import hotelbooking from '../assets/Hotel-Booking.png';
import hotelbooking1 from '../assets/Hotel-Booking1.png';
import patrolrobot from '../assets/patrol_robot.jpg';
import stockproject from '../assets/stockproject-2.jpg';
import miniproject from '../assets/Mini project.pdf';
import patrolpdf from '../assets/Patrol_Robot.pdf';
import { Link } from "react-router-dom";

function Project() {

  return (
    <>
      <section id="Project">
        <div className="container text-center pt-5">
          <h1 className="text-center project">PROJECTS</h1>
          {/* --------------------------------- */}
          <div className="row row-cols-1 row-cols-md-3 g-5 pt-5">
            <div className="col">
              <div className="card h-100 procard">
                <div className="card-body">
                  <Link to="https://ajithb2002.github.io/BL_Hotel-Booking/" target="_blank"><img src={hotelbooking} alt="Webite demo" className="card-img-top " /></Link>
                  <Link to="https://ajithb2002.github.io/BL_Hotel-Booking/" target="_blank"><img src={hotelbooking1} alt="Webite demo" className="card-img-top pt-2 " /></Link>
                  <h5 className="card-title fw-semibold pt-3">HOTEL BOOKING RESPONSIVE  WEBSITE</h5>
                  <p className="card-text"><span className="fw-bold pt-2">Goals:</span>provide customers with a convenient way to book a hotel room online.It also offer a wide range of features, including price comparisons, reviews, ratings, maps, and 24/7 customer support. </p>
                  <p className="card-text"><span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap and JavaScript</p>
                  <p className="card-text ">Click the Image ("View Details")   <FontAwesomeIcon icon={faHandPointUp} className="fa-fade fs-2 text-danger" /> </p>
                </div>
              </div>
            </div>
             <div className="col">
              <div className="card h-100 procard">
                <Link to={miniproject} target="_blank"><img src={stockproject} alt="demo img" className="card-img-top" /></Link>
                <div className="card-body">
                  <h5 className="card-title fw-semibold pt-3">STOCK MARKET SMART ADVISOR</h5>
                  <p className="card-text">Goal:The web application will be useful to avoid unwanted investment or losses.</p>
                  <p className="card-text">Skillset: Python, Alpha vantage API, SMTP, HTML5,Bootstrap CSS3, Java script</p>
                  <p className="card-text">Click the Image ("View Details ")   <FontAwesomeIcon icon={faHandPointUp} className="fa-fade fs-2 text-danger" /> </p>
                </div>
              </div>
            </div>  
            <div className="col">
              <div className="card h-100 procard">
                <Link to={patrolpdf} target="_blank"><img src={patrolrobot} alt="patrol robot" className="card-img-top" /></Link>
                <div className="card-body">
                  <h5 className="card-title fw-semibold pt-3">PATROL ROBOT TO IMPROVE SAFETY IN BLIND SPOTS</h5>
                  <p className="card-text">Goal : Providing safety to people in blind spots</p>
                  <p className="card-text">Skillset : Python,Face Recognition, Raspberry Pi, Pi Cam, node MCU, GPS module.</p>
                  <p className="card-text">Click the Image ("View Details ")   <FontAwesomeIcon icon={faHandPointUp} className="fa-fade fs-2 text-danger" /> </p>
                </div>
              </div>
            </div>
                   
          </div>
           {/* --------------------------------- */}    
        </div>
      </section>
    </>
  );
}
export default Project;

