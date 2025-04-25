import React from "react";
import '../pages/Copyright.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Copyright() {

    return (
        <>
<section id="copyright">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
                <p className="ctext mb-0 text-center text-md-start">Developed by AJITH B</p>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                    <span className="connect me-3 d-none d-sm-block">connect</span>
                    <div className="social-links">
                        <a className="social-icon" href="https://www.instagram.com/invites/contact/?i=fpxf97tsu3c9&utm_content=ks1a7dk" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/in/ajith-b-ajithbl7474/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="social-icon" href="https://github.com/AjithB2002" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}

export default Copyright;
