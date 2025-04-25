import React, { useState } from "react";
import "./Experience.css";
// Assuming you're using Font Awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faGraduationCap, 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';

function Experience() {
  // State to manage active tab (work or education)
  const [activeTab, setActiveTab] = useState("work");

  // Work experience data array - easy to update or expand
  const workExperience = [
    {
      title: "Junior Backend Developer",
      company: "Capecom Solutions Pvt Ltd",
      period: "Jan 2025 - Present",
      description: [
        "Working with TypeScript, Node.js, Laravel, MongoDB, and MySQL",
        "Developing and maintaining backend systems",
        "Optimizing database interactions and ensuring efficient data flow",
        "Collaborating with cross-functional teams to deliver scalable web applications"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Alpha Business Solutions Private Limited",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Specialized in live development of web applications and managing databases",
        "Worked with Next js, Node js, Express and MongoDB",
        "Focused on clean, efficient code implementation",
        "Ensured optimal performance in front-end and back-end integration"
      ]
    }
  ];

  // Education data array - easy to update or expand
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "St. Xavier's Catholic College of Engineering",
      location: "Chunkankadai, Tamil Nadu, India",
      period: "2019-2023",
      score: "CGPA: 7.71"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Francis Xavier Higher Secondary School",
      location: "Manguzhy, Tamil Nadu, India",
      period: "2018-2019",
      score: "68% Marks"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Francis Xavier Higher Secondary School",
      location: "Manguzhy, Tamil Nadu, India",
      period: "2016-2017",
      score: "89% Marks"
    }
  ];

  // Experience Card Component - reusable for experience entries
  const ExperienceCard = ({ experience, index }) => (
    <div key={index} className="card experience-card mb-4 border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="card-title h4 mb-0 fw-bold">
            {experience.title}
          </h3>
          <span className="badge bg-primary rounded-pill">
            {experience.period}
          </span>
        </div>
        <h4 className="h5 text-muted mb-3">{experience.company}</h4>
        <ul className="list-unstyled mb-0">
          {experience.description.map((item, idx) => (
            <li key={idx} className="mb-2 ps-3 position-relative">
              <FontAwesomeIcon 
                icon={faCheck} 
                className="text-primary position-absolute" 
                style={{ left: 0 }} 
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Education Card Component - reusable for education entries
  const EducationCard = ({ education, index }) => (
    <div key={index} className="card education-card mb-4 border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="card-title h4 mb-0 fw-bold">
            {education.degree}
          </h3>
          <span className="badge bg-success rounded-pill">
            {education.score}
          </span>
        </div>
        <h4 className="h5 text-muted mb-2">{education.institution}</h4>
        <div className="d-flex justify-content-between align-items-center text-muted">
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            {education.location}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
            {education.period}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="Experience" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Section Title with gradient effect */}
            <h1 className="text-center mb-5 position-relative">
              <span className="titledesign display-4 fw-bold">E</span>
              <span style={{color: 'white'}} className="fw-bold">XPERIENCE</span>
              <div className="title-underline"></div>
            </h1>

            {/* Tab selection buttons */}
            <div className="d-flex justify-content-center mb-4">
              <div className="btn-group shadow-sm" role="group">
                <button
                  className={`btn btn-lg ${
                    activeTab === "work"
                      ? "btn-primary active"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("work")}
                >
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  Work Experience
                </button>
                <button
                  className={`btn btn-lg ${
                    activeTab === "education"
                      ? "btn-primary active"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  Education
                </button>
              </div>
            </div>

            {/* Content area for tabs */}
            <div className="tab-content mt-4">
              {activeTab === "work" ? (
                <div className="fade show active">
                  {workExperience.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                  ))}
                </div>
              ) : (
                <div className="fade show active">
                  {education.map((edu, index) => (
                    <EducationCard key={index} education={edu} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;