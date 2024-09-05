import './App.css';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skill from './components/Skill';

function App() {
  return (
    <>
      <div className='productParentCls'>
        <Landing/>
        <Skill/>
        <Experience/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
