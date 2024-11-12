import { useState, useRef,React } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contact() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const form = useRef(); 

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!formData.fullname || !formData.email || !formData.message) {
            setErrorMessage('Please fill out all required fields.');
            return;
        }


        const serviceId = 'service_762002'; 
        const templateId = 'template_fur6e8z'; 
        const userId = 'JroXg5Cw2mWtbxdaC'; 

        
        const templateParams = {
            From_name: formData.fullname,
            From_email: formData.email,
            From_phone: formData.phone || 'N/A',
            Message: formData.message
        };

       
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                    setFormData({
                        fullname: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                    setErrorMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setErrorMessage('There was an issue with your submission. Please try again later.');
                }
            );
    };
  return (
    <>
      <section id="Contact">
        <div className="container text-center pt-5">
          <h1 className="text-center contacthead">
            <span className="titledesign">C</span>ONTACT
          </h1>
        </div>
        <section className=" py-3 py-md-5 py-xl-8 ">
          <div className="container formedit py-2">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
              <div className="col-12 col-lg-6">
                <div className="row justify-content-xl-center text-light">
                  <div className="col-12 col-xl-11">
                    <h2 className="h1 mb-3 ">Get in Touch</h2>
                    <p className="lead fs-4 text-light mb-5">
                      I'm always on the lookout for work with you. If you're
                      interested in hiring me, please get in touch in one of the
                      following ways:.
                    </p>
                    <div className="d-flex mb-5">
                      <div>
                        <h4 className="mb-3">
                          <Link className="text-light fs-4 px-1 ">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </Link>{" "}
                          Address
                        </h4>
                        <address className="mb-0 text-light">
                          11-12E, Puthuvlai, Thalakulam post, Kanyakumari
                          disrict, TamiNadu.{" "}
                        </address>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 col-sm-6">
                        <div className="d-flex mb-5 mb-sm-0">
                          <div>
                            <h4 className="mb-3">
                              <Link className="text-light fs-4 px-1 ">
                                <FontAwesomeIcon icon={faPhone} />
                              </Link>{" "}
                              Phone
                            </h4>
                            <p className="mb-0">
                              <Link
                                className="link-light text-decoration-none"
                                to="tel:8870280961"
                              >
                                +91 8870280961
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="d-flex mb-0">
                          <div>
                            <h4 className="mb-3">
                              <Link className="text-light fs-4 px-1 ">
                                <FontAwesomeIcon icon={faEnvelope} />
                              </Link>{" "}
                              E-Mail
                            </h4>
                            <p className="mb-0">
                              <Link
                                className="link-light text-decoration-none"
                                to="mailto:ajithbl7474@gmail.com"
                              >
                                ajithbl7474@gmail.com
                              </Link>
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
                <form ref={form} onSubmit={handleSubmit}>
                                        <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                            <div className="col-12">
                                                <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                                <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid contactbuttonedit">
                                                    <button className="btn btn-lg" type="submit">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {isSubmitted && <p className="text-success mt-3">Your message has been sent successfully!</p>}
                                    {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
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

