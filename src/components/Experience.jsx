import React from 'react';
import styles from './EducationExperience.module.css';
import { motion } from 'framer-motion';

const experienceData = [
  {
    year: ' November 2025',
    title: 'Find Your Scholarship | School Project',
    institution: 'Team Project at USJR',
    description: 'Designed and prototyped user interfaces with a focus on usability and accessibility. Created wireframes, mockups, and interactive prototypes using Figma and Canva. Applied UX principles to improve navigation, layout, and overall user experience. Collaborated with peers and stakeholders to iterate and present effective solutions.',
  },                    
  {
    year: 'June 2025',
    title: 'Console Game | Botcamp Training Project',
    institution: 'Team Project at USJ-R',
    description: 'Conducted manual and regression testing on a student-developed website, validating workflows and ensuring stability after updates. Designed the user interface and database for clarity and balance, ensured proper alignment of elements, and conducted manual testing on a student-developed website to identify functional and usability issues',
  },
  {
    year: 'April 2025',
    title: 'Console Game | Botcamp Training Project',
    institution: 'Team Project at USJ-R',
    description: ' Designed the user interface of the web app. Collaborated with peers and stakeholders to iterate and present solutions. Conducted manual testing to ensure the project work as what we expected it to behave or functioned. Checks if the system works according to the requirements or specifications.',
  },
];

const Experience = () => {
  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.item}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className={styles.year}>{item.year}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.institution}>{item.institution}</span>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
