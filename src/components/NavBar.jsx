import React from 'react';
import '../components/NavBar.css';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark p-3 " data-bs-theme="dark" id='neubar'>
    <div className="container-fluid">
      <Link className="navbar-brand logo" to="Ajith_portfolio/"> <img src={Logo}  alt="Logo"  width="85px" height="auto"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
         
      <div className=" collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto mt-sm-2 ">
        <li className="nav-item">
              <Link className="nav-link mx-2 active " aria-current="page" to="">Home</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link mx-2 " to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2 " to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/project">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/certificates">Certificates</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto d-flex flex-row sss">
          <li className="nav-item mx-2">
            <Link className="nav-link text-light fa-fade fs-4 " to="https://github.com/AjithB2002" target="blank"><FontAwesomeIcon icon={faGithub} /></Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-light fa-fade fs-4" to="https://www.linkedin.com/in/ajith-b-ajithbl7474/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-light fa-fade fs-4" to="https://twitter.com/Ajith_B_2002" target="blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavigationBar;
