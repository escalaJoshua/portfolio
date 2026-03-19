import React from 'react';
import styles from './EducationExperience.module.css';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    description: 'Ongoing studies, focusing on web development and data structures.',
  },
  {
    year: '2022',
    title: 'School Web App Project',
    institution: 'Team Project at USJR',
    description: 'Collaborated on a student portal using React and Firebase.',
  },
  {
    year: '2021',
    title: 'Summer Internship',
    institution: 'Local Tech Firm',
    description: 'Assisted in QA testing and basic front-end development.',
  },
];

const EducationExperience = () => {
  return (
    <section className={styles.section} id="education">
      <div className="container">
        <h2 className={styles.heading}>Education & Experience</h2>
        <div className={styles.timeline}>
          {timelineData.map((item, idx) => (
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

export default EducationExperience;
