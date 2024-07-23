import React from 'react'
import logo from '../assets/logo-nass.png'
const Experience = () => {
  return (
    <section id="exp"><div className='sec-div'>
      <h1 className='sec'>Experience</h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100"  src={logo} alt="First slide"/>
      <div className="carousel-caption d-block d-md-block">
    <h5>Web Development & Programming Teacher</h5>
    <p>@ Nass Academy For Science & Skills</p>
    </div>
  </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
   
  </a>
    </div>
     </div></section>
  )
}

export default Experience
