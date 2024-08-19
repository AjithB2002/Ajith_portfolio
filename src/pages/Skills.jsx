import React from "react";
import '../pages/Skills1.css';

import javalogo from '../assets/java-logo.jpg';
import csslogo from '../assets/css3-logo.png';
import htmllogo from '../assets/html5-logo.png';
import jslogo from '../assets/js-logo.png';
import reactlogo from '../assets/react-logo.png';
import bootstraplogo from '../assets/bootstrap-logo.png';
import springlogo from '../assets/springboot-logo.png';
import mysqllogo from '../assets/mysql-logo.png';
import postgresql from '../assets/postgresql-logo.png';
import nodejs from '../assets/nodejs-logo.png';

function Skills() {
    return (
        <>
            <section id="Skills">
                <div className="container text-center pt-5">
                    <h1 className="text-center skills"><span className="titledesign">MY</span> SKILLS</h1>
                    <h4 className="pt-5 fs-4 fw-bold techskill">Technical Skills</h4>




                    <div className="row row-cols-1 row-cols-md-5 g-5 pt-5">
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={javalogo} alt="java-img" className="javalogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">JAVA</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="50">
                                        <div className="progress-bar bg-info text-dark JAVA" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={csslogo} alt="css-img" className=" csslogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light ">CSS3</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark CSS3" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={htmllogo} alt="html-img" className=" htmllogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">HTML5</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark HTML5" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={jslogo} alt="javascript-img" className=" jslogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">Java Script</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark js" >80%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={reactlogo} alt="react-img" className=" reactlogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">React js</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark React" >95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={bootstraplogo} alt="bootstrap-img" className=" bootstraplogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">Bootstrap</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark Bootstrap" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={springlogo} alt="springboot-img" className=" springlogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">SpringBoot</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark SpringBoot" >85%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={mysqllogo} alt="mysql-img" className=" mysqllogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">My SQL</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark SQL" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={postgresql} alt="mysql-img" className=" postgresqllogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">Postgre SQL</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark postgresql" >100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 container stylecard">
                                <div>
                                    <img src={nodejs} alt="mysql-img" className=" nodejslogo" />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-light">Node JS</h4>
                                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info text-dark nodejs" >75%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </>
    );
}

export default Skills;
