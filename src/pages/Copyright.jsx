import React from "react";
import '../pages/Copyright.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Copyright() {

    return (
        <>
            <section id="copyright">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="ctext">Developed by AJITH B</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="list-inline">
                                <li className="list-inline-item"><span className="connect px-4">connect</span><a className="fa-fade text-dark fs-3 px-2" href="https://www.instagram.com/invites/contact/?i=fpxf97tsu3c9&utm_content=ks1a7dk " target="blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a className="fa-fade text-dark fs-3 px-2" href="https://www.linkedin.com/in/ajith-b-ajithbl7474/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li className="list-inline-item"><a className="fa-fade text-dark fs-3 px-2" href="https://github.com/AjithB2002" target="blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Copyright;
