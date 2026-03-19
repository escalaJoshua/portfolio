import React from 'react';
import styles from './Education.module.css';
import { motion } from 'framer-motion';
import universityLogo from '../assets/school-logo/university-logo.png';
import highschoolLogo from '../assets/school-logo/highschool-logo.png';
import elementaryLogo from '../assets/school-logo/elementary-logo.png';

const educationData = [
  {
    id: 1,
    schoolName: 'University of San Jose Recoletos',
    schoolType: 'SOFTWARE DEVELOPMENT',
    program: 'Computer Technology',
    year: '2024 - 2026',
    logo: universityLogo,
  },
  {
    id: 2,
    schoolName: 'DOONG NATIONAL HIGH SCOOL',
    schoolType: 'Secondary Education',
    program: 'General Academic Strand',
    year: '2019 - 2023',
    logo: highschoolLogo,
  },
  {
    id: 3,
    schoolName: 'DOONG ELEMENTARY SCHOOL',
    schoolType: 'Primary Education',
    program: 'General Education',
    year: '2013 - 2019',
    logo: elementaryLogo,
  },
];

const Education = () => {
  return (
    <section className={styles.section} id="education">
      <div className={styles.container}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.schoolsGrid}>
          {educationData.map((school, idx) => (
            <motion.div
              key={school.id}
              className={styles.schoolBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.logoContainer}>
                <img 
                  src={school.logo} 
                  alt={school.schoolName} 
                  className={styles.logoImage}
                />
              </div>
              <h3 className={styles.schoolName}>{school.schoolName}</h3>
              <p className={styles.schoolType}>{school.schoolType}</p>
              <p className={styles.schoolDetails}>
                {school.program}
              </p>
              <p className={styles.year}>{school.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
