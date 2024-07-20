import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/nav';
import Header  from'./components/header';

import ParticlesComponent from './part_background.js'
function App() {
  return (
    <>
    <Navbar/>
    <Header />
    <ParticlesComponent id="particles"/>
    </>
  );
}

export default App;
