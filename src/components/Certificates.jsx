import React, { useState } from 'react';
import styles from './Certificates.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// automatically import any images placed anywhere under assets
// using Vite's glob with eager: true (replaces deprecated globEager)
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg}', { eager: true });

// helper to grab an image by filename (without path)
function getImage(name) {
  const key = Object.keys(images).find((k) => k.endsWith(name));
  if (!key) {
    console.warn(`certificate image not found: ${name}`);
    return null;
  }
  return images[key].default;
}

const certs = [
  {
    title: 'Conduct UX Research and Test Early Concepts.',
    link: '#',
    image: getImage('design_process.jpg'),
  },
  {
    title: 'UX Design Process: Empathize, Define, and Ideate.',
    link: '#',
    image: getImage('UserExperience.jpg'),
  },
  {
    title: 'Foundations of User Experience (UX) Design.',
    link: '#',
    image: getImage('UX_research.jpg'),
  },
  {
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    link: '#',
    image: getImage('wireframes.jpg'),
  },
  {
    title: 'Technical Fundamentals in IT Support.',
    link: '#',
    image: getImage('iT_Support.jpg'),
  },
  {
    title: 'Career Exploration and Planning for the Future and What is Personal Branding.',
    link: '#',
    image: getImage('Career_Exploration.jpg'),
  },
  {
    title: 'Campus to Corporate: A Glimpse of Reality and Public Speaking.',
    link: '#',
    image: getImage('Campus_Corporate.jpg'),
  },
  {
    title: 'Presentation Skills and Fostering Respect Language & Behavior Toward People with Disabilitie.',
    link: '#',
    image: getImage('Presentation.jpg'),
  },
  {
    title: 'Conduct of SRHR,SOGIESC, and CSE Training / Seminars for Future Professionals.',
    link: '#',
    image: getImage('future professionals.jpg'),
  },
  {
    title: 'Completed the YOUTH EMPOWERMENT SESSIONS: level 1',
    link: '#',
    image: getImage('completion.jpg'),
  },
  {
    title: 'Branding and Executive Presence.',
    link: '#',
    image: getImage('Branding.jpg'),
  },
  {
    title: 'Effective Writing Skills and Youv`e Got This: Fueling Your Confidence.',
    link: '#',
    image: getImage('effective_writing.jpg'),
  },
   {
    title: 'Career Talks with Marivel Deodores, IT and digital Operations, and Site Tour.',
    link: '#',
    image: getImage('Career talks.jpg'),
  },
  {
    title: 'Business Communication Etiquette & Social Media Training and Self-Defense.',
    link: '#',
    image: getImage('Etiquette.jpg'),
  },
  
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const uploadedCerts = certs.filter((c) => c.image);
  
  return (
    <section className={styles.section} id="certificates">
      <div className="container">
        <h2 className={styles.heading}>Certificates</h2>
        <div className={styles.grid}>
          {uploadedCerts.length === 0 && (
            <div className={styles.empty}>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                 
              </p>
            </div>
          )}
          {certs.map((c, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              onClick={() => setSelectedCert(c)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className={styles.preview}
                />
              ) : (
                <div className={styles.preview} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
                  <span style={{ textAlign: 'center', fontSize: '0.85rem' }}>Image not found</span>
                </div>
              )}
              <span className={styles.title}>{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for certificate details */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
              {selectedCert.image && (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className={styles.modalImage}
                />
              )}
              <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
