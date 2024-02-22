import React from "react";
import '../pages/Certificates.css';

import codechef from '../assets/certificates/code chef java.png';
import dbms from '../assets/certificates/DBMS photo.png';
import greatlearning from '../assets/certificates/great learning java.png';
import fullstackjava from '../assets/certificates/Full Stack Java Certificate.pdf';
import ibm from '../assets/certificates/IBM project certificate.png';
import ArtificalIntel from '../assets/certificates/Artifical intelligence certificate.png';
function Certificates() {
    return (
        <>
            <section id="Certificates">
                <div className="container text-center pt-5">
                    <h1 className="text-center certificates">CERTIFICATES</h1>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide  certificationcarousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner certificateinner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={codechef} className="d-block w-100 " alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src={dbms} className="d-block w-100" alt="..."/>
                                    
                            </div>
                            <div className="carousel-item">
                            <img src={greatlearning} className="d-block w-100" alt="..."/>
                                   
                            </div>
                            <div className="carousel-item">
                            <img src={ibm} className="d-block w-100" alt="..."/>
                                   
                            </div>
                            <div className="carousel-item">
                            <img src={ArtificalIntel} className="d-block w-100" alt="..."/>
                            
                            </div>
                        </div>
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>


        </>
    );
}

export default Certificates;