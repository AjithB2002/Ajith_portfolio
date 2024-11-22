import React from "react";
import '../pages/Project.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faBook, faPaperPlane, faPeopleGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import hotelbooking from '../assets/Hotel-Booking.png';
import hotelbooking1 from '../assets/Hotel-Booking1.png';
import patrolrobot from '../assets/patrol_robot.jpg';
import stockproject from '../assets/stockproject-2.jpg';
import miniproject from '../assets/Mini project.pdf';
import patrolpdf from '../assets/Patrol_Robot.pdf';
import portfolio from '../assets/portfolio.png';
import portfolio1 from '../assets/portfolio1.png';
import weather1 from '../assets/weather app 1.png';
import weather2 from '../assets/weather app 2.png';
import moviebooking1 from '../assets/movie booking 1.png';
import moviebooking2 from '../assets/movie booking 2.png';
import ourteam from '../assets/Our team.jpg';
import todo from '../assets/todolist.png';
import todo1 from '../assets/todolist1.png';
import nodejscrud from '../assets/nodejs_crud.png';
import nodejscrud1 from '../assets/nodejs_crud1.png';
import { Link } from "react-router-dom";

function Project() {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <>
     <section id="Project">
   
      <div className="container text-center pt-2">
          <motion.h1
            className="text-center project"
            initial={{ opacity: 0, y: -20 }}
            custom={0}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.3 } } : {}}
          >
            <span className="titledesign">P</span>ROJECTS
          </motion.h1>
          <motion.p
            className="projectDesc"
            initial={{ opacity: 0, y: -20 }}
            custom={1}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.3 } } : {}}
            >
             <span className="projectDesc">Showcase of Applied Expertise</span>
          </motion.p>
          {/* --------------------------------- */}
    
          <div className="row row-cols-1 row-cols-md-4 g-5 pt-5">
            {/* ................... */}
           
            <div className="col">
              <div className="card h-100 procard">
                <img src={todo1} alt="Webite demo" className="card-img-top " />
                <img src={todo} alt="Webite demo" className="card-img-top " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal8">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal8" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel5">FULL STACK TASK MANAGEMENT APPLICATION</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text">
                          Developed a task management application using <strong>React.js</strong> for the frontend and <strong>Spring Boot</strong> for the backend.
                          Implemented CRUD operations for tasks, enabling users to create, edit, update, and delete tasks.
                          Integrated <strong>MongoDB</strong> for database storage and seamless data management.
                        </p>
                        <p className="card-text">
                          Designed a responsive user interface for optimal performance across various devices.
                          Deployed the frontend using <strong>GitHub Pages</strong>, with backend services connected via a REST API.
                          Utilized <strong>Git</strong> for version control and <strong>Postman</strong> for API testing during the development process.
                        </p>
                        <p className="card-text">
                          <span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap, JavaScript, React.js, Spring Boot, MongoDB
                        </p>

                        <div className="d-flex justify-content-evenly ">
                          <a className="btn projectbutton" href="https://github.com/AjithB2002/Todolist" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://ajithb2002.github.io/Todolist/" target="_blank" role="button">Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal" aria-label="Close">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            {/* ................... */}
            <div className="col" >
              <div className="card h-100 procard">
                <img src={nodejscrud} alt="Webite demo" className="card-img-top " />
                <img src={nodejscrud1} alt="Webite demo" className="card-img-top " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal7" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3 " id="exampleModalLabel5">ROBUST NODE.JS API WITH MONGODB RATE LIMITING AND SECURE AUTHENTICATION</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text">
                          Developed a robust RESTful API utilizing <strong>Node.js</strong> and <strong>MongoDB</strong> to implement essential backend functionalities.
                          The project features comprehensive <strong>MongoDB connection handling</strong> with robust exception management to address connection errors and return appropriate HTTP status codes.
                          Implemented <strong>API rate limiting</strong> to handle a maximum of 10 requests per minute per user, ensuring system stability; when the limit is exceeded, the API responds with a clear message indicating that rate limits have been reached.
                        </p>
                        <p className="card-text">
                          Integrated secure <strong>API authentication</strong> mechanisms to protect endpoints, ensuring only authorized users can access specific resources.
                          Enabled comprehensive <strong>CRUD operations</strong> for effective data management.
                        </p>


                        <p className="card-text"><span className="fw-bold">Skillset:</span> Node js ,Postman, Mongo DB</p>
                        <div className="d-flex justify-content-evenly ">
                          <a className="btn projectbutton" href="https://github.com/AjithB2002/node-js_Crud_JWT" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .............. */}
            <div className="col">
              <div className="card h-100 procard">
                <img src={moviebooking1} alt="Webite demo" className="card-img-top " />
                <img src={moviebooking2} alt="Webite demo" className="card-img-top " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel5">BL MOVIE TICKET BOOKING WEBSITE</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text">The movie ticket booking website allows users to easily browse movies, check showtimes at nearby theaters, select seats, and purchase tickets online.</p>
                        <p className="card-text">It provides convenience by eliminating the need to visit theaters in person and offers options for different preferences, like choosing seats in advance and checking movie details. Users can create accounts for quicker bookings and enjoy features like notifications for confirmed bookings. Overall, it simplifies the process of planning and enjoying a trip to the movies.  </p>
                        <p className="card-text"><span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap , JavaScript, React js ,Springboot, PostgreSQL and TMDB Database</p>
                        <div className="d-flex justify-content-evenly ">
                          <a className="btn projectbutton" href="https://github.com/AjithB2002/Movie_Ticket_Booking" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://ajithb2002.github.io/Movie_Ticket_Booking/" target="_blank" role="button">Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ........... */}
            <div className="col">
              <div className="card h-100 procard">
                <img src={weather2} alt="Webite demo" className="card-img-top " />
                <img src={weather1} alt="Webite demo" className="card-img-top " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel">BL GLOBAL WEATHER GUIDE APPLICATION</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text">The Weather Application utilizes the OpenWeather API to access accurate and timely weather data. </p>
                        <p className="card-text"> The Weather Application keeps you updated with real-time weather forecasts tailored to your location and preferences. Whether you're planning your day, a weekend getaway, or a business trip. </p>
                        <p className="card-text">  Additionally, users have the flexibility to search for weather details of any city worldwide, ensuring comprehensive access to weather information. </p>
                        <p className="card-text"><span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap , JavaScript, React js and Open Weather API</p>
                        <div className="d-flex justify-content-evenly ">
                          <a className="btn projectbutton" href="https://github.com/AjithB2002/BL_Weather" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://ajithb2002.github.io/BL_Weather/" target="_blank" role="button">Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ........... */}
            <div className="col" >
              <div className="card h-100 procard">
                <img src={portfolio} alt="Webite demo" className="card-img-top " />
                <img src={portfolio1} alt="Webite demo" className="card-img-top " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel">PERSONAL PORTFOLIO RESPONSIVE  WEBSITE</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text">My personal portfolio website serves as a digital showcase of an individual's skills, experiences, and accomplishments. It's a dynamic platform where individuals can present their skills, projects, achievements and personal details. </p>
                        <p className="card-text"><span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap , React js and JavaScript</p>
                        <div className="d-flex justify-content-evenly ">
                          <a className="btn projectbutton" href="https://github.com/AjithB2002/Ajith_portfolio" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://ajithb2002.github.io/Ajith_portfolio/" target="_blank" role="button">Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ....... */}

            <div className="col">
              <div className="card h-100  procard">
                <img src={hotelbooking} alt="Webite demo" className="card-img-top " />
                <img src={hotelbooking1} alt="Webite demo" className="card-img-top  " />
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel">HOTEL BOOKING RESPONSIVE  WEBSITE</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text"><span className="fw-bold pt-2">Goals:</span>provides customers with a convenient way to book hotel rooms online. It offers a wide range of features, including price comparisons, reviews, ratings, maps, and 24/7 customer support. Users can easily search for accommodations, compare prices, read reviews from other guests, view ratings, explore maps for location details, and receive round-the-clock assistance for any inquiries or issues. </p>
                        <p className="card-text"><span className="fw-bold">Skillset:</span> HTML5, CSS3, Bootstrap and JavaScript</p>
                        <div className="d-flex justify-content-evenly">
                          <a className="btn projectbutton " href="https://github.com/AjithB2002/BL_Hotel-Booking" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://ajithb2002.github.io/BL_Hotel-Booking/" target="_blank" role="button">Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ........ */}

            <div className="col">
              <div className="card h-100 procard">
                <img src={stockproject} alt="demo img" className="card-img-top " width={"120px"} />
                <button type="button" className="btn glow-on-hover text-light " data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>
                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel">STOCK MARKET SMART ADVISOR</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text"><span className="fw-bold pt-2 h5">Goals:</span>Every day the application will get the stock ending price of last two days and it analyse it later it will be send an SMS regarding the particular stock weather it is in profit or loss and The web application will be useful to avoid unwanted investment or losses.</p>
                        <p className="card-text"><span className="fw-bold pt-2 h5">Skillset:</span> Python, Alpha vantage API, SMTP, HTML5,Bootstrap CSS3, Java script</p>
                        <p className="fw-bold fs-4 text-center">EXPLANATION</p>
                        <p className="card-text"><span className="fw-bold pt-3">Python:</span> Use Python for backend development, including data processing, analysis, and integrating with APIs.</p>
                        <p className="card-text">   <span className="fw-bold">Alpha Vantage API:</span> Utilize the Alpha Vantage API to retrieve real-time and historical stock market data, including stock prices, technical indicators, and fundamental data.</p>
                        <p className="card-text"> <span className="fw-bold">SMTP:</span> Implement SMTP (Simple Mail Transfer Protocol) to enable email notifications. You can send alerts to users based on certain criteria, such as significant price changes or portfolio performance.</p>

                        <p className="card-text"> <span className="fw-bold">HTML5 CSS3 Bootstrap:</span> Design the frontend of your web application using HTML5 for structure and Bootstrap CSS3 for responsive and visually appealing layouts. Bootstrap will help ensure your application looks good and functions well across various devices and screen sizes.</p>
                        <p className="card-text">   <span className="fw-bold">Java Script:</span> Enhance user interactivity and functionality with JavaScript. You can use JavaScript to create dynamic elements, handle user inputs, and implement client-side validation.</p>

                        <div className="d-grid projectbutton">
                          <a className="btn " href={miniproject} target="_blank" role="button"> View Details <FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2 " /></a>
                        </div>

                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* ........... */}
            <div className="col"  >
              <div className="card h-100 procard">
                <Link to={patrolpdf} target="_blank"><img src={patrolrobot} alt="patrol robot" className="card-img-top" /></Link>
                <button type="button" className="btn glow-on-hover text-light" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2 " />
                </button>

                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fw-bold fs-3" id="exampleModalLabel">PATROL ROBOT TO IMPROVE SAFETY IN BLIND SPOTS</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p className="card-text"><span className="fw-bold pt-2">Goals:</span> Providing safety to people in blind spots</p>
                        <p className="card-text"><span className="fw-bold pt-2">Skill set:</span> Python,Face Recognition, Raspberry Pi, Pi Cam, node MCU, GPS module.</p>


                        <div className="d-grid projectbutton">
                          <a className="btn  " href={ourteam} target="_blank" role="button">OUR TEAM<FontAwesomeIcon icon={faPeopleGroup} className="fa-fade px-2 " /></a>
                        </div>

                        <div className="d-flex justify-content-evenly pt-4">
                          <a className="btn projectbutton " href="https://github.com/AjithB2002/Patrol_Robot" target="_blank" role="button">GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2 " /></a>
                          <a className="btn projectbutton " href="https://youtu.be/ZJakfl5xTVo" target="_blank" role="button">Demo Video <FontAwesomeIcon icon={faVideo} className="fa-fade px-2 " /></a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ........... */}
          </div>
       
          {/* --------------------------------- */}
        </div>
     

      </section>
    </>
  );
}
export default Project;
