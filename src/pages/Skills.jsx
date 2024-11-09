

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

  const skillCategories = [
    {
      title: 'Frontend',
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
      skills: [
        { name: 'Java', imgSrc: javalogo },
        { name: 'Node JS', imgSrc:nodejs },
        { name: 'Express JS', imgSrc: express},
        { name: 'MySQL', imgSrc: mysqllogo},
        { name: 'Spring Boot',imgSrc:springlogo },
        { name: 'MongoDB', imgSrc: mongodb },
        { name: 'PostgreSQL', imgSrc: postgresql },  
        { name: 'Python', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256' },
      ],
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Git', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256' },
        { name: 'GitHub', imgSrc: 'https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png' },
        { name: 'Bitbucket', imgSrc:bitbucket},
        { name: 'Postman API', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256' }
      ],
    },
  ];

  return (
    <div className="skillsbg">
        <section id="skills" ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
    
      <motion.span
        className="skillsHeading"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.3 } } : {}}
      >
       <span className='firstletterskills'>S</span>kills
      </motion.span>
      <motion.span
        className="skillsDesc"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } : {}}
      >
        Mastery Highlights
      </motion.span>

      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="skillCategory">
          <div className="categoryHeading">
            <p > {category.title}</p>
          </div>
          <div className='skillBars'>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="skillBar"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={skillIndex} // Pass index for delay
              >
                <img src={skill.imgSrc} alt={skill.name} className='skillImg' />
                <p className='pt-3'>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </div>
  );
};

export default Skills;