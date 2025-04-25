import React from 'react';
import '../pages/Home.css';
import Ajith from '../assets/Ajith.jpg';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience'
import Project from '../pages/Project';
import Resume from '../assets/Resume.pdf';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';
import Copyright from '../pages/Copyright';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (

        <>
            <section id="Home">
                <div className="container">
                    <div className="row pt-5 ">
                        <div className="col-md-8 ">
                            <h3 >Hi, It's Me</h3>
                            <h1 className='name'><span className='firstletter'>A</span>jith B</h1>
                            <h2 className='name1'>And I'm a <span className='animate-charcter'>Full Stack Developer</span></h2>
                            <p className='fs-5 mt-2'>
                                Diligent and enthusiastic Junior Backend Developer at Capecom Solution Pvt Ltd. Passionate about building efficient and scalable server-side applications. Eager to leverage my skills and contribute to dynamic projects. A collaborative team player with a passion for problem-solving and continuous learning.
                            </p>

                            <div className='row'>
                                <div className='col-6'>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> Email:</p>
                                    <p className='h5'> <Link className="link-light text-decoration-none" to="mailto:ajithbl7474@gmail.com">ajithbl7474@gmail.com</Link></p>
                                    < Link id="pdf-link" to={Resume} className='btn btn-info btn-large mt-3' target="_blank" download="Ajith B - Resume.pdf">Download CV</Link>
                                </div>
                                <div className='col-6 '>
                                    <p><FontAwesomeIcon icon={faPhone} /> Contact No:</p>
                                    <p className='h5'> <Link className="link-light text-decoration-none" to="tel:8870280961">+91 8870280961</Link></p>

                                    <Link to="/contact">  <button className="btn btn-outline-info btn-large mt-3 ">Hire Me!</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div ><img src={Ajith} alt="Ajith_PHOTO" className="myimg" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <Skills />
            <Experience />
            <Project />
            <Certificates />
            <Contact />
            <Copyright />


        </>

    );

}
export default Home;
