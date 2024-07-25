import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/nav';
import Header  from'./components/header';
import { Routes, Route } from 'react-router-dom';
import ParticlesComponent from './part_background.js'
import AboutMe from './components/AboutMe.jsx';
import Education from './components/education.jsx';
import Experience from './components/Experience.jsx';
function App() {
  return (
    <>
      <Routes>
      <Route path="/portfolio" element={<MainContent />} />
      </Routes>

    <ParticlesComponent id="particles"/>
    </>
  );
}
const MainContent = () => {
  return (
    <><Navbar />
    <Header />
    <AboutMe/>
    <Education/>
    <Experience/>
    </> 
  );
};

export default App;
