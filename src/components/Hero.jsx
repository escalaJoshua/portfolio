import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Button from './Button';
import profilePic from '../assets/profile.jpg'; // placeholder - add your image to assets
import { motion } from 'framer-motion';

// simple typing animation component with backspacing
const TypingName = () => {
  const fullText = 'JOSHUA ESCALA';
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let idx = 0;
    let direction = 1; // 1 = typing, -1 = deleting
    const intervalSpeed = 120; // slower for smoother effect
    let interval;

    const step = () => {
      idx += direction;
      setDisplayed(fullText.slice(0, idx));

      if (direction === 1 && idx === fullText.length) {
        // pause then start deleting
        clearInterval(interval);
        setTimeout(() => {
          direction = -1;
          interval = setInterval(step, intervalSpeed);
        }, 1500);
      } else if (direction === -1 && idx === 0) {
        clearInterval(interval);
        setTimeout(() => {
          direction = 1;
          interval = setInterval(step, intervalSpeed);
        }, 500);
      }
    };

    interval = setInterval(step, intervalSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      className={styles.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
    >
      {displayed}
      <span className={styles.cursor}>|</span>
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className={styles.avatar}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        />
        {/* typing name */}
        <TypingName />
        <motion.p
          className={styles.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Software Developer
        </motion.p>
        <p className={styles.tagline}>
          "Turning ideas into seamless digital experiences — passionate about
          building fast, elegant, and user-focused websites."
        </p>
        <div className={styles.actions}>
          <Button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </Button>
          <Button onClick={() => document.querySelector('#certificates').scrollIntoView({ behavior: 'smooth' })}>
            View Certificates
          </Button>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
