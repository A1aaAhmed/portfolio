import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';


//ctl+D select selected
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
<nav className="navbar sticky-top  navbar-expand-lg bg-white">
  <div className="container-fluid">
  <a className="navbar-brand" href='/portfolio'onClick={handleLogoClick}><img className= 'logo'src ={logo} alt='Alaa Ahmed logo'/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#aboutMe">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#edu">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#exp">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#intren">Internships</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Act">Activities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#pro">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#fun">Fun Facts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact Me</a>
      </li>


    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar