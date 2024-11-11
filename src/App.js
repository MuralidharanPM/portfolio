import './App.css';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ExperienceV2 from './components/ExperienceV2';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skill from './components/Skill';
import React, { useRef } from 'react';

function App() {
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className='productParentCls'>
      <Landing
          scrollToSkill={() => skillRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToExperience={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToCertifications={() => certificationsRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        <div ref={skillRef}><Skill /></div>
        <div ref={experienceRef}><ExperienceV2/></div>
        {/* <div ref={projectsRef}><Projects /></div> */}
        <div ref={certificationsRef}><Certifications /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
    </>
  );
}

export default App;
