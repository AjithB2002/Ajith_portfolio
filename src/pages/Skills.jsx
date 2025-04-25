

import React from 'react';
import '../pages/Skills1.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import postgresql from '../assets/skills/postgresql-logo.png';
import javalogo from '../assets/skills/java-logo.png';
import csslogo from '../assets/skills/css3-logo.png';
import htmllogo from '../assets/skills/html5-logo.png';
import jslogo from '../assets/skills/js-logo.png';
import reactlogo from '../assets/skills/react-logo.png';
import bootstraplogo from '../assets/skills/bootstrap-logo.png';
import springlogo from '../assets/skills/springboot-logo.png';
import mysqllogo from '../assets/skills/mysql-logo.png';
import nodejs from '../assets/skills/nodejs-logo.png';
import mongodb from '../assets/skills/mongodb-logo.png';
import bitbucket from '../assets/skills/bitbucket.png';
import express from '../assets/skills/express.png';
import nextjs from '../assets/skills/next js.png';

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: false });

  const skillBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.3,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React JS', imgSrc: reactlogo },
        { name: 'JavaScript', imgSrc: jslogo },
        { name: 'Next js', imgSrc: nextjs },
        { name: 'HTML5', imgSrc: htmllogo },
        { name: 'CSS3', imgSrc: csslogo },
        { name: 'Bootstrap', imgSrc: bootstraplogo },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', imgSrc: javalogo },
        { name: 'Node JS', imgSrc: nodejs },
        { name: 'Express JS', imgSrc: express},
        { name: 'MySQL', imgSrc: mysqllogo},
        { name: 'Spring Boot', imgSrc: springlogo },
        { name: 'MongoDB', imgSrc: mongodb },
        { name: 'PostgreSQL', imgSrc: postgresql },
        { name: 'Python', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256' },
      ],
    },
    {
      title: 'Other Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256' },
        { name: 'GitHub', imgSrc: 'https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png' },
        { name: 'Bitbucket', imgSrc: bitbucket},
        { name: 'Postman API', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256' }
      ],
    },
  ];

  return (
    <div className="skillsbg">
      <section id="skills" ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h1 className="text-center position-relative skillsHeading">
              <span className="titledesign display-2 fw-bold">S</span>
              <span style={{ color: 'white' }} className="fw-bold">trengths</span>
             
            </h1>
          <div className="skills-subheader">
            <span className="skillsDesc">Mastery Highlights</span>
            <div className="skills-line"></div>
          </div>


        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-categories-container"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skillCategory"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="categoryHeading">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              <div className="skillBars">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skillBar"
                    variants={skillBarVariants}
                    custom={skillIndex}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="skill-content">
                      <img src={skill.imgSrc} alt={skill.name} className="skillImg" />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;