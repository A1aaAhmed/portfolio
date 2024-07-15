import React from 'react'
import logo from '../assets/logo.png'
//ctl+D select selected
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
  <a className="navbar-brand" href="#"><img className= 'logo'src ={logo} alt='Alaa Ahmed logo'/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      <li className="nav-item active">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Internships</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Activities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Fun Facts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Me</a>
      </li>


    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar