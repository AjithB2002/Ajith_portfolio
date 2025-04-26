import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import Ajith from '../assets/Ajith1.jpg';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience'
import Project from '../pages/Project';
import Resume from '../assets/Resume.pdf';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';
import Copyright from '../pages/Copyright';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <section id="Home">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-8">
                            <h3>Hi, It's Me</h3>
                            <h1 className='name'><span className='firstletter'>A</span>jith B</h1>
                            <h2 className='name1'>And I'm a <span className='animate-charcter'>Full Stack Developer</span></h2>
                            <p className='fs-5 mt-2'>
                                Diligent and enthusiastic <span style={{backgroundColor: "#f1f1f1", padding: "0.2em", borderRadius: "0.2em",color:"#0d6efd"}}>Junior Backend Developer</span> at Capecom Solution Pvt Ltd. Passionate about building efficient and scalable server-side applications. Eager to leverage my skills and contribute to dynamic projects. A collaborative team player with a passion for problem-solving and continuous learning.
                            </p>

                            <div className='row'>
                                <div className='col-6'>
                                    <Link id="pdf-link" to={Resume} className='btn btn-info btn-large mt-3' target="_blank" download="Ajith B - Resume.pdf">Download CV</Link>
                                </div>
                                <div className='col-6'>
                                    <Link to="/contact"><button className="btn btn-outline-info btn-large mt-3">Hire Me!</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 profile-image-container">
                            <div className="image-wrapper">
                                <img src={Ajith} alt="ADMIN_PHOTO" className="myimg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showButton && (
                <button onClick={scrollToTop} className="btn btn-outline-info btn-floating btn-large" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
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