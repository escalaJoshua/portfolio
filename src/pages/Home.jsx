import React from 'react';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Services from '../components/Services';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ProfileSummary />
      <Services />
      <Education />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
