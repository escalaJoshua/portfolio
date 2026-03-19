import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Find Your Scholarship (FYS) Web App',
    description: 'Scholarship web application prototype designed to help students find scholarship online.',
    tags: ['FIGMA'],
    link: 'https://www.figma.com/proto/z3FWb3d5ydmN2aff000pCR/FOR-DEFFENCE?node-id=21-5848&viewport=323%2C549%2C0.07&t=u5hAxADRGqS3cEGP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=21%3A5848&page-id=0%3A1',
    github: '#',
  },
  {
    title: 'TodoList Mobile App',
    description: 'Simple todo list with with friendly user design that will help users make a productive day.',
    tags: ['Figma'],
    link: 'https://www.figma.com/proto/0tlmQjAUZDCXqaXreu1Vu6/todolist?node-id=36-235&p=f&viewport=349%2C278%2C0.05&t=ctw6Y2O9HSnNcl2B-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=36%3A235&show-proto-sidebar=1&page-id=0%3A1',
    github: '#',
  },
  {
    title: 'Simple Calculator',
    description: 'Basic calculator with a clean and intuitive interface.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.info}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className={styles.tags}>
                {p.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
