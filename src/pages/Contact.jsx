import React from "react";

import '../pages/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <section id="Contact">
                <div className="container text-center pt-5">
                    <h1 className="text-center certificates">CONTACT</h1>
                </div>
            <section className=" py-3 py-md-5 py-xl-8 ">
                <div className="container formedit py-2">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center text-light">
                                <div className="col-12 col-xl-11">
                                    <h2 className="h1 mb-3 ">Get in Touch</h2>
                                    <p className="lead fs-4 text-light mb-5">I'm always on the lookout for work with you. If you're interested in hiring me, please get in touch in one of the following ways:.</p>
                                    <div className="d-flex mb-5"> 
                                        <div>
                                         <h4 className="mb-3"><Link className="text-light fs-4 px-1 "><FontAwesomeIcon icon={faLocationDot} /></Link> Address</h4>
                                            <address className="mb-0 text-light">11-12E, Puthuvlai, Thalakulam post, Kanyakumari disrict, TamiNadu. </address>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex mb-5 mb-sm-0">                              
                                                <div>
                                                    <h4 className="mb-3"><Link className="text-light fs-4 px-1 "><FontAwesomeIcon icon={faPhone} /></Link> Phone</h4>
                                                    <p className="mb-0">
                                                        <Link className="link-light text-decoration-none" to="tel:8870280961">+91 8870280961</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex mb-0">                                                
                                                <div>
                                                    <h4 className="mb-3"><Link className="text-light fs-4 px-1 "><FontAwesomeIcon icon={faEnvelope} /></Link> E-Mail</h4>
                                                    <p className="mb-0">
                                                        <Link className="link-light text-decoration-none" to="mailto:ajithbl7474@gmail.com">ajithbl7474@gmail.com</Link>
                                                        

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">

                            <div className="bg-white border rounded shadow-sm overflow-hidden">

                                <form action="#!">
                                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                        <div className="col-12">
                                            <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="fullname" name="fullname"  required/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" id="email" name="email"  required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <input type="tel" className="form-control" id="phone" name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                            <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid buttonedit">
                                                <button className="btn btn-lg" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </section>
        </>
    );
}
export default Contact;