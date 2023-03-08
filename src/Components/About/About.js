import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {

    useEffect(()=> {
        Aos.init({duration: 1900})
    }, [])

  return (
    <div id='about' className="about row d-flex justify-content-center align-items-center ">
        <div className="col-md-3" data-aos = "fade-right">
            <img className="img-fluid bg-dark" src="./images/profile.png" alt="my profile"/>
        </div>
        <div className="col-md-7 bg-dark p-5 border border-lg border-dark rounded-end">
                <div id='about' className='about_text' data-aos = "fade-left">
                    <h3>About Me</h3>
                    <p>
                    Hey...! My name is Redolf Kwame Osei, a graduate with Bachelor's Degree in BSc. 
                    Information and Communications Technology. Loves to learn new technologies and tools from the internet.
                    Super positive and I always look forward for new adventures in technology.
                    I hate restricting myself to a single domain and I always try to extend my interest in multiple domains.
                    I spend most of my time coding and learning new stuff from documentations, ALX, udemy, theodinproject, youtube, coursera, codewar, freecodecamp.etc 
                    </p>
                    <p>
                    My interest in web development started in 2017 when I edited a wordpress and Shopify code to suit the design a client wanted.
                    Twerking Shopify css and html codes built up my interest and I started learning more about website development as a freelancer. 
                    I am an enthusiat of the blockchain technology. 
                    </p>
                    <div className='row technology'>
                        <div className='col-3'>
                            <p><span> ➣ </span>JavaScript</p>
                            <p><span> ➣ </span>ReactJS</p>
                            <p><span> ➣ </span>NodeJS</p>
                        </div>
                        <div className='col-3'>
                            <p><span> ➣ </span>Python</p>
                            <p><span> ➣ </span>HTML/CSS</p>
                            <p><span> ➣ </span>Mongoose</p>
                        </div>
                        <div className='col-3'>
                            <p><span> ➣ </span>Bootstrap</p>
                            <p><span> ➣ </span>Wordpress</p>
                            <p><span> ➣ </span>Shopify</p>
                        </div>    
                    </div>
                </div>
        </div>
  </div>
  )
}

export default About


