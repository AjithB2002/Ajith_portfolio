import React from "react";
import '../pages/Project.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBook, faPaperPlane, faPeopleGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// Import all images
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

// Project data array
const projectsData = [
  {
    id: "todoProjectModal",
    images: [todo1, todo],
    title: "FULL STACK TASK MANAGEMENT APPLICATION",
    description: [
      "Developed a task management application using <strong>React.js</strong> for the frontend and <strong>Spring Boot</strong> for the backend. Implemented CRUD operations for tasks, enabling users to create, edit, update, and delete tasks. Integrated <strong>MongoDB</strong> for database storage and seamless data management.",
      "Designed a responsive user interface for optimal performance across various devices. Deployed the frontend using <strong>GitHub Pages</strong>, with backend services connected via a REST API. Utilized <strong>Git</strong> for version control and <strong>Postman</strong> for API testing during the development process.",
    ],
    skills: "HTML5, CSS3, Bootstrap, JavaScript, React.js, Spring Boot, MongoDB",
    githubLink: "https://github.com/AjithB2002/Todolist",
    demoLink: "https://ajithb2002.github.io/Todolist/"
  },
  {
    id: "exampleModal7",
    images: [nodejscrud, nodejscrud1],
    title: "ROBUST NODE.JS API WITH MONGODB RATE LIMITING AND SECURE AUTHENTICATION",
    description: [
      "Developed a robust RESTful API utilizing <strong>Node.js</strong> and <strong>MongoDB</strong> to implement essential backend functionalities. The project features comprehensive <strong>MongoDB connection handling</strong> with robust exception management to address connection errors and return appropriate HTTP status codes. Implemented <strong>API rate limiting</strong> to handle a maximum of 10 requests per minute per user, ensuring system stability; when the limit is exceeded, the API responds with a clear message indicating that rate limits have been reached.",
      "Integrated secure <strong>API authentication</strong> mechanisms to protect endpoints, ensuring only authorized users can access specific resources. Enabled comprehensive <strong>CRUD operations</strong> for effective data management."
    ],
    skills: "Node js, Postman, Mongo DB",
    githubLink: "https://github.com/AjithB2002/node-js_Crud_JWT",
    demoLink: null
  },
  {
    id: "exampleModal6",
    images: [moviebooking1, moviebooking2],
    title: "BL MOVIE TICKET BOOKING WEBSITE",
    description: [
      "The movie ticket booking website allows users to easily browse movies, check showtimes at nearby theaters, select seats, and purchase tickets online.",
      "It provides convenience by eliminating the need to visit theaters in person and offers options for different preferences, like choosing seats in advance and checking movie details. Users can create accounts for quicker bookings and enjoy features like notifications for confirmed bookings. Overall, it simplifies the process of planning and enjoying a trip to the movies."
    ],
    skills: "HTML5, CSS3, Bootstrap, JavaScript, React js, Springboot, PostgreSQL and TMDB Database",
    githubLink: "https://github.com/AjithB2002/Movie_Ticket_Booking",
    demoLink: "https://ajithb2002.github.io/Movie_Ticket_Booking/"
  },
  {
    id: "exampleModal5",
    images: [weather2, weather1],
    title: "BL GLOBAL WEATHER GUIDE APPLICATION",
    description: [
      "The Weather Application utilizes the OpenWeather API to access accurate and timely weather data.",
      "The Weather Application keeps you updated with real-time weather forecasts tailored to your location and preferences. Whether you're planning your day, a weekend getaway, or a business trip.",
      "Additionally, users have the flexibility to search for weather details of any city worldwide, ensuring comprehensive access to weather information."
    ],
    skills: "HTML5, CSS3, Bootstrap, JavaScript, React js and Open Weather API",
    githubLink: "https://github.com/AjithB2002/BL_Weather",
    demoLink: "https://ajithb2002.github.io/BL_Weather/"
  },
  {
    id: "exampleModal4",
    images: [portfolio, portfolio1],
    title: "PERSONAL PORTFOLIO RESPONSIVE WEBSITE",
    description: [
      "My personal portfolio website serves as a digital showcase of an individual's skills, experiences, and accomplishments. It's a dynamic platform where individuals can present their skills, projects, achievements and personal details."
    ],
    skills: "HTML5, CSS3, Bootstrap, React js and JavaScript",
    githubLink: "https://github.com/AjithB2002/Ajith_portfolio",
    demoLink: "https://ajithb2002.github.io/Ajith_portfolio/"
  },
  {
    id: "exampleModal3",
    images: [hotelbooking, hotelbooking1],
    title: "HOTEL BOOKING RESPONSIVE WEBSITE",
    description: [
      "<span class=\"fw-bold pt-2\">Goals:</span>provides customers with a convenient way to book hotel rooms online. It offers a wide range of features, including price comparisons, reviews, ratings, maps, and 24/7 customer support. Users can easily search for accommodations, compare prices, read reviews from other guests, view ratings, explore maps for location details, and receive round-the-clock assistance for any inquiries or issues."
    ],
    skills: "HTML5, CSS3, Bootstrap and JavaScript",
    githubLink: "https://github.com/AjithB2002/BL_Hotel-Booking",
    demoLink: "https://ajithb2002.github.io/BL_Hotel-Booking/"
  },
  {
    id: "exampleModal2",
    images: [stockproject],
    title: "STOCK MARKET SMART ADVISOR",
    description: [
      "<span class=\"fw-bold pt-2 h5\">Goals:</span>Every day the application will get the stock ending price of last two days and it analyse it later it will be send an SMS regarding the particular stock weather it is in profit or loss and The web application will be useful to avoid unwanted investment or losses.",
      "<span class=\"fw-bold pt-2 h5\">Skillset:</span> Python, Alpha vantage API, SMTP, HTML5,Bootstrap CSS3, Java script",
      "<span class=\"fw-bold fs-4 text-center\">EXPLANATION</span>",
      "<span class=\"fw-bold pt-3\">Python:</span> Use Python for backend development, including data processing, analysis, and integrating with APIs.",
      "<span class=\"fw-bold\">Alpha Vantage API:</span> Utilize the Alpha Vantage API to retrieve real-time and historical stock market data, including stock prices, technical indicators, and fundamental data.",
      "<span class=\"fw-bold\">SMTP:</span> Implement SMTP (Simple Mail Transfer Protocol) to enable email notifications. You can send alerts to users based on certain criteria, such as significant price changes or portfolio performance.",
      "<span class=\"fw-bold\">HTML5 CSS3 Bootstrap:</span> Design the frontend of your web application using HTML5 for structure and Bootstrap CSS3 for responsive and visually appealing layouts. Bootstrap will help ensure your application looks good and functions well across various devices and screen sizes.",
      "<span class=\"fw-bold\">Java Script:</span> Enhance user interactivity and functionality with JavaScript. You can use JavaScript to create dynamic elements, handle user inputs, and implement client-side validation."
    ],
    skills: "Python, Alpha vantage API, SMTP, HTML5, Bootstrap CSS3, Java script",
    pdfLink: miniproject,
    hasDetailsButton: true
  },
  {
    id: "exampleModal1",
    images: [patrolrobot],
    title: "PATROL ROBOT TO IMPROVE SAFETY IN BLIND SPOTS",
    description: [
      "<span class=\"fw-bold pt-2\">Goals:</span> Providing safety to people in blind spots",
      "<span class=\"fw-bold pt-2\">Skill set:</span> Python, Face Recognition, Raspberry Pi, Pi Cam, node MCU, GPS module."
    ],
    skills: "Python, Face Recognition, Raspberry Pi, Pi Cam, node MCU, GPS module",
    githubLink: "https://github.com/AjithB2002/Patrol_Robot",
    demoVideoLink: "https://youtu.be/ZJakfl5xTVo",
    teamPhotoLink: ourteam,
    pdfLink: patrolpdf,
    hasTeamButton: true
  }
];

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="col">
      <div className="card h-100 procard">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt="Website demo" className="card-img-top" />
        ))}
        <button
          type="button"
          className="btn glow-on-hover text-light"
          data-bs-toggle="modal"
          data-bs-target={`#${project.id}`}
        >
          show more <FontAwesomeIcon icon={faArrowRight} className="fa-fade px-2" />
        </button>
      </div>

      {/* Modal */}
      <div className="modal fade" id={project.id} tabIndex="-1" aria-labelledby={`${project.id}Label`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fw-bold fs-3" id={`${project.id}Label`}>
                {project.title}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {project.description.map((paragraph, index) => (
                <p key={index} className="card-text" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              ))}

              {project.skills && (
                <p className="card-text">
                  <span className="fw-bold">Skillset:</span> {project.skills}
                </p>
              )}

              <div className="d-flex justify-content-evenly">
                {project.githubLink && (
                  <a
                    className="btn projectbutton"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    GitHub Link<FontAwesomeIcon icon={faBook} className="fa-fade px-2" />
                  </a>
                )}

                {project.demoLink && (
                  <a
                    className="btn projectbutton"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    Demo<FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2" />
                  </a>
                )}

                {project.demoVideoLink && (
                  <a
                    className="btn projectbutton"
                    href={project.demoVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    Demo Video <FontAwesomeIcon icon={faVideo} className="fa-fade px-2" />
                  </a>
                )}
              </div>

              {/* Special buttons */}
              {project.hasDetailsButton && (
                <div className="d-grid projectbutton mt-3">
                  <a
                    className="btn"
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    View Details <FontAwesomeIcon icon={faPaperPlane} className="fa-fade px-2" />
                  </a>
                </div>
              )}

              {project.hasTeamButton && (
                <div className="d-grid projectbutton mt-3">
                  <a
                    className="btn"
                    href={project.teamPhotoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    OUR TEAM<FontAwesomeIcon icon={faPeopleGroup} className="fa-fade px-2" />
                  </a>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn contactclosebtn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Project() {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <>
      <section id="Project">
        <div className="container text-center ">
          <motion.span
            className="text-center project"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h1 className="text-center position-relative">
              <span className="titledesign display-4 fw-bold">P</span>
              <span style={{ color: 'white' }} className="fw-bold">ROJECT</span>
             
            </h1>
          </motion.span>

          <motion.p
            className="projectDesc"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Explore my collection of dynamic and interactive web applications, designed to deliver seamless user experiences and robust functionality.
          </motion.p>
          <div className="project-title-underline"></div>

          <div className="row row-cols-1 row-cols-md-4 g-5 pt-5">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;