import React from "react";
import '../pages/Skills.css';

import javalogo from '../assets/java-logo.jpg';
import csslogo from '../assets/css3-logo.png';
import htmllogo from '../assets/html5-logo.png';
import jslogo from '../assets/js-logo.png';
import reactlogo from '../assets/react-logo.png';
import bootstraplogo from '../assets/bootstrap-logo.png';
import springlogo from '../assets/springboot-logo.png';
import mysqllogo from '../assets/mysql-logo.png';

function Skills() {
    return (
        <>
            <section id="Skills">
                <div className="container text-center pt-5">
                    <h1 className="text-center skills">MY SKILLS</h1>
                    <h4 className="pt-5 fs-4 fw-bold techskill">Technical Skills</h4>
                    <div className="row row-cols-1 row-cols-md-4 g-5 pt-5">
                        <div className="col">
                            <img src={javalogo} alt="java-img" className=" javalogo" />
                            <h4 className="text-light pt-3">JAVA</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="50">
                                <div className="progress-bar bg-info text-dark JAVA" >85%</div>
                            </div>
                            <p className="text-light pt-1">Building server-side logic using frameworks like Spring Boot & Integrating with frontend frameworks like Angular or React using RESTful APIs.</p>
                        </div>
                        <div className="col">
                            <img src={csslogo} alt="css-img" className=" csslogo" />
                            <h4 className="text-light pt-3">CSS3</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark CSS3" >90%</div>
                            </div>
                            <p className="text-light pt-1">CSS (Cascading Style Sheets) is a language used to style the appearance of HTML elements on web pages.</p>

                        </div>
                        <div className="col">
                            <img src={htmllogo} alt="html-img" className=" htmllogo" />
                            <h4 className="text-light pt-3">HTML5</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark HTML5" >100%</div>
                            </div>
                            <p className="text-light pt-1">HyperText Markup Language, and it is used to create the structure, layout, and content of a webpage.</p>
                        </div>
                        <div className="col">
                            <img src={jslogo} alt="javascript-img" className=" jslogo" />
                            <h4 className="text-light pt-3">Java Script</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark js" >70%</div>
                            </div>
                            <p className="text-light pt-1">scripting language primarily used for adding interactivity and creating animations on web pages.</p>
                        </div>
                        <div className="col pt-4">
                            <img src={reactlogo} alt="react-img" className=" reactlogo" />
                            <h4 className="text-light pt-3">React js</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark React" >75%</div>
                            </div>
                            <p className="text-light pt-1">JavaScript library that is used to build user interfaces for web and mobile applications .It's widely used by web developers and designers.</p>
                        </div>
                        <div className="col pt-4">
                            <img src={bootstraplogo} alt="bootstrap-img" className=" bootstraplogo" />
                            <h4 className="text-light pt-3">Bootstrap</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark Bootstrap" >100%</div>
                            </div>
                            <p className="text-light pt-1">popular front-end web framework for designing and developing responsive, mobile-first, and dynamic web applications</p>
                        </div>
                        <div className="col pt-4">
                            <img src={springlogo} alt="springboot-img" className=" springlogo" />
                            <h4 className="text-light pt-3">SpringBoot</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark SpringBoot" >75%</div>
                            </div>
                            <p className="text-light pt-1">A popular Java-based web framework that provides a simple and easy-to-use platform for building and deploying modern web applications.</p>
                        </div>
                        <div className="col pt-4">
                            <img src={mysqllogo} alt="mysql-img" className=" mysqllogo" />
                            <h4 className="text-light pt-3">My SQL</h4>
                             <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info text-dark SQL" >80%</div>
                            </div>
                            <p className="text-light pt-1">Open-source relational database management system (RDBMS) that is widely used in web and mobile applications. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
