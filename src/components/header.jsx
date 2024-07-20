import React from "react"
import photo from '../assets/1.jfif'
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-inf">
        <div className="container">
        <div className="row">
        <div className="col-sm" id ='logo-text'>
        <h1> Hi,I'm Alaa </h1>
        <br/>
       <span className="typo-span"> I'm a </span>
      <ReactTyped typeSpeed={40} className ="typed-text" strings={["Software Engineer","Verification Engineer"]} backSpeed={50} loop/>
        </div>
        <div className="col-sm">
        <img src={photo}  className="rounded-circle"  alt="Avatar" />
        </div>
       
        
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
