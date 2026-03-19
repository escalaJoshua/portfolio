import React from 'react';
import styles from './ProfileSummary.module.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiCanva,
  SiMicrosoftexcel,
  SiReact,
  SiNodedotjs,
  SiFigma,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#E34C26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'C Programming', icon: SiC, color: '#00599C' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
  { name: 'Excel', icon: SiMicrosoftexcel, color: '#217346' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const ProfileSummary = () => {
  return (
    <section className={styles.profile} id="about">
      <div className="container">
        <h2 className={styles.heading}>Profile</h2>
        <p className={styles.description}>
          Motivated Associate in Computer technology with strong analytical,
          problem-solving, and communication skills. 
          Skilled in usability evaluation, wireframing, and prototyping, 
          with a passion for building intuitive, user-centered digital experiences that enhance accessibility and engagement. 
        </p>
        <div className={styles.skills}>
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className={styles.badge}>
                <IconComponent className={styles.icon} style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
