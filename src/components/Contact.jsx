import React, { useState } from 'react';
import styles from './Contact.module.css';
import Button from './Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Email is invalid';
    if (!form.message) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // handle form submission (e.g., send to backend or email service)
    console.log('Form submitted', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.container}>
          <div className={styles.info}>
          <p>
            <strong>Location:</strong> Cebu City, Philippines
          </p>
          <p>
            <strong>Phone:</strong> 09602071099
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:escalajoshua04@gmail.com">
              escalajoshua04@gmail.com
            </a>
          </p>
          <div className={styles.socials}>
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-escala-071ab8395/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          </div>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </div>
          <Button type="submit">Send Message</Button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
