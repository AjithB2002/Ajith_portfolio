import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState("work");

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
        "Specialized in web applications and database management",
        "Worked with MySQL, PostgreSQL, and MongoDB",
        "Focused on clean, efficient code implementation",
        "Ensured optimal performance in front-end and back-end integration"
      ]
    }
  ];

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

  return (
    <>
      <section id="Experience" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-center mb-5 position-relative">
                <span className="titledesign display-4 fw-bold">E</span>
                <span style={{color: 'white'}} className="fw-bold">XPERIENCE</span>
                <div className="title-underline"></div>
              </h1>

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
                    <i className="fas fa-briefcase me-2"></i>
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
                    <i className="fas fa-graduation-cap me-2"></i>
                    Education
                  </button>
                </div>
              </div>

              <div className="tab-content mt-4">
                {activeTab === "work" ? (
                  <div className="fade show active">
                    {workExperience.map((exp, index) => (
                      <div key={index} className="card experience-card mb-4 border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="card-title h4 mb-0 text-primary fw-bold">
                              {exp.title}
                            </h3>
                            <span className="badge bg-primary rounded-pill">
                              {exp.period}
                            </span>
                          </div>
                          <h4 className="h5 text-muted mb-3">{exp.company}</h4>
                          <ul className="list-unstyled mb-0">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="mb-2 ps-3 position-relative">
                                <i className="fas fa-check text-primary position-absolute" style={{ left: 0 }}></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="fade show active">
                    {education.map((edu, index) => (
                      <div key={index} className="card education-card mb-4 border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="card-title h4 mb-0 text-primary fw-bold">
                              {edu.degree}
                            </h3>
                            <span className="badge bg-success rounded-pill">
                              {edu.score}
                            </span>
                          </div>
                          <h4 className="h5 text-muted mb-2">{edu.institution}</h4>
                          <div className="d-flex justify-content-between align-items-center text-muted">
                            <span>
                              <i className="fas fa-map-marker-alt me-2"></i>
                              {edu.location}
                            </span>
                            <span>
                              <i className="fas fa-calendar-alt me-2"></i>
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;