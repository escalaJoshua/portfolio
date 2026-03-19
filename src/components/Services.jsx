import React from 'react';
import styles from './Services.module.css';
import { FaLaptopCode, FaPaintBrush, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const serviceList = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Responsive, SEO-friendly websites with modern tech stack.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Clean interfaces focused on user experience and accessibility.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'QA Testing',
    description: 'Manual testing to ensure bug-free delivery and quality.',
  },
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className={styles.heading}>Services</h2>
        <div className={styles.grid}>
          {serviceList.map((service) => (
            <motion.div
              key={service.title}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
