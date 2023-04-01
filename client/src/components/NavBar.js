import React from 'react'
import { NavLink, Link } from "react-router-dom";
import '../styles/NavBar.css'

export default function NavBar({user, setUser}) {

  function handleLogoutClick() {
    
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log("logged out!")
      
      }
    });
  }
  
  return (
  //   <div className=' menu-container fixed-top'>
  //     <div><nav className="container">

  //   <input type="checkbox" aria-label="Toggle menu" />
  //   <span></span>
  //   <span></span>
  //   <span></span>
  

    

  //   <div className="menu">
  //     <a href="/" class="menu-logo">
  //     <h1>INSTRUMENT RENTAL</h1>
  //     </a>
  
  //     <ul>
  //       <li> <NavLink
  //       to="/"
  //       exact
  //       activeStyle={{
  //           color: "#599bb3",
            
  //       }}
  //       >
  //       HOME
  //       </NavLink>
  //       </li>
    
  //       <li><NavLink
  //       to="/about"
  //       exact
  //       activeStyle={{
  //           color: "#599bb3",
  //       }}
  //       >
  //       ABOUT
  //       </NavLink></li>
      
  //       <li>
  //           <NavLink
  //           to="/login"
  //           exact
  //           activeStyle={{
  //               color: "#599bb3",
  //           }}
  //           >
  //          LOGIN
  //          </NavLink>
  //     </li>
  //     <li>
  //           <a
  //           href="/footer"
  //           onClick={()=>{
  //             window.scrollTo({
  //               top: 1000,
  //               behavior: "smooth"
  //             })
  //           }
  //           }
  //           exact
  //           activeStyle={{
  //               color: "#599bb3",
  //           }}
  //           >
  //          CONTACT
  //          </a>
  //     </li>
   
  //   </ul>

   
  //   </div>
  // </nav>
  // </div>
  // </div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="">INSTRUMENT RENTAL</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">HOW IT WORKS</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
</nav>

  )
}
