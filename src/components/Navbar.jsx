import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">Portfolio</Link>
        </div>
        <button
          className={styles.burger}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {sections.map((sec) => (
            <li key={sec.name + sec.id}>
              <a
                href={`#${sec.id}`}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                {sec.name}
              </a>
            </li>
          ))}
        </ul>
        <Button
          className={styles.cta}
          onClick={() =>
            document
              .querySelector('#contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
