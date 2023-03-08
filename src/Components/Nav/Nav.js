import React from 'react'
import './Nav.css'
import 'bootstrap/js/dist/collapse'

function Nav() {
  return (
    <div id='nav' className='container'>
    <nav class="navbar navbar-fixed fixed-top navbar-expand-md bg-dark sticky-top">
      <a class="navbar-brand ms-5" href="#home">REDOLF</a>
      <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="navbar-menu collapse navbar-collapse float-end" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0 float-end">
          <li class="nav-item active">
            <a class="nav-link" href="#about">About</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <button className='bg-transparent'>Resume</button>
          </li>
        </ul>
      </div>
    </nav>
    </div>

  )
}

export default Nav