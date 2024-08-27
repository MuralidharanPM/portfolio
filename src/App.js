import './App.css';
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
      </div>
    </>
  );
}

export default App;
