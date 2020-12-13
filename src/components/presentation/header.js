import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";


function LoggedIn(params) {
 
  
  return (
    
           <ul>
            <li className="">             
               <a onClick={()=>{params.signOut()}} className=" text-white btnv-3" type='button'>{}</a>      
            </li>
            <div className='error-occured'>{}</div>
          </ul>
  )

}

function LoggedOut(props) {
  return (
                                                                                                              
    
    <ul className="ulgap">
            <li className="signup ">
              <NavLink className=" btnv-1 ulgap" to="/register">
               Register
              </NavLink>
            </li>
            <li className="signin"> 
              <NavLink className="text-blue btnv-3" to="/login">
              Sign In
              </NavLink>         
            </li>
          </ul> 
  )
}



const header = (props) => {


  const {auth} =props;
  const logged = true;
  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo} alt='header'></img>
      </a> 
        <div className="header-links full-height">
        <LoggedIn></LoggedIn>
        <LoggedOut></LoggedOut>
        <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/home">
            Home
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
      </div>   
    </nav>
  </header>

  );
};

export default header;