import React from "react";
import '../pages/Certificates.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
function Certificates() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const certificateVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2, // Staggered animation delay
            },
        }),
    };

    const certifications = [
        { name: 'Front End Development Libraries', imgSrc: 'https://www.freecodecamp.org/certification/Ajith_B/front-end-development-libraries' },
        { name: 'Full Stack Java', imgSrc: 'https://drive.google.com/file/d/1Q4xv_3NmeMPnCvwgqOzQuCwzTz6ZK2za/view?usp=sharing' },
        { name: 'Java (Basic)', imgSrc: 'https://www.hackerrank.com/certificates/df896a73f493' },
        { name: 'Java Programming', imgSrc: 'https://www.mygreatlearning.com/certificate/WRBGGRKI' },
        { name: 'Artificial Intelligence', imgSrc: 'https://drive.google.com/file/d/1655VO6zA1MZ3YZK45tG9GFAzAG6VfMVg/view?pli=1' },
        { name: 'Low Code App Development', imgSrc: 'https://drive.google.com/file/d/1vx2ghHAIXNQNznnfiV7Kid4yaPeJ8wil/view?pli=1' },
        { name: 'DataBase Programming with SQL', imgSrc: 'https://drive.google.com/file/d/1wa2UEr4JvepmYvTwmunsHWakwMAsd8m8/view?pli=1' },
        { name: 'PHP and MySQL Training', imgSrc: 'https://drive.google.com/file/d/1vx_G0VHOVJFxaVQA84usQBbjJqpIk4Iz/view' },
        { name: 'Usable Security', imgSrc: 'https://www.coursera.org/account/accomplishments/verify/S7SKVWZ4HDLL' }
    ];

    return (
  <div className="bgcert">
       <motion.section
                id="certifications"
                ref={sectionRef}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8 } }
                }}
            >
                <motion.span
                    className="cert-heading"
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                     <span className='firstlettercert'>C</span>ertifications
                </motion.span>

                <motion.span
                    className="cert-desc"
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                     Validations of Expertise
                </motion.span>

                <div className="certificate-container pt-5">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="certificate"
                            initial="hidden"
                            animate={sectionInView ? "visible" : "hidden"}
                            variants={certificateVariants}
                            custom={index} // Pass index for delay
                        >
                            <p>{cert.name}</p>
                            <a className="link-underline link-underline-opacity-0" href={cert.imgSrc} target="_blank" rel="noopener noreferrer">View</a>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
  </div>

         
    
    );
}
export default Certificates;