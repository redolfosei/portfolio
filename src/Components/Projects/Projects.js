import React from 'react'
import 'bootstrap/js/dist/tab'
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Projects() {

  useEffect(()=> {
    Aos.init({duration: 1900})
}, [])

  return (
    <div id='projects' className='projects align-items-center justify-content-center ms-auto me-auto'  style={{width:'80%'}}>  
    <h3 className='prjtitle'>My Projects</h3>

      <div className="card-group">
        <div className="card bg-dark" style={{width: '10rem'}} data-aos = "fade-right">
          <img src="./images/bic.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4 class="card-title"> The Bicycle Repair Website</h4>
            <p className="card-text">
            This is <a href='https://redolfosei.github.io/theBikeRepair/' target={'_blank'}>the bicycle repair website</a> here.
            It was built with HTML, CSS, Bootstrap. 
            </p>
            <a href='https://redolfosei.github.io/theBikeRepair/' target={'_blank'}><button className='bg-transparent'>View Website</button></a>
          </div>
        </div>

        <div className="card bg-dark" style={{width: '10rem'}} data-aos = "zoom-in">
          <img src="./images/drumkit.png" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4 class="card-title"> The Drum Kit Web App </h4>
            <p className="card-text">This is <a href='https://redolfosei.github.io/theDrumKit/' target={'_blank'}>the Drum Kit web application</a>.
            It was built with HTML, CSS and Javascript.</p>
            <a href='https://redolfosei.github.io/theDrumKit/' target={'_blank'}><button className='bg-transparent'>View Website</button></a>
          </div>
        </div>

        <div className="card bg-dark me-5" style={{width: '10rem'}} data-aos = "fade-left">
          <img src="./images/logosite.png" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4 class="card-title"> The Logo Designers Website </h4>
            <p className="card-text">
            This is <a href='https://redolfosei.github.io/logoDesignPortfolio/'>the Logo Designers Website.</a>
            This website was built with HTML, CSS and Bootstrap.
            </p>
            <a href='https://redolfosei.github.io/logoDesignPortfolio/' target={'_blank'}><button className='bg-transparent'>View Website</button></a>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Projects