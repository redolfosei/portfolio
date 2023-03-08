import React from 'react'
import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    
    <div id='home' className='home bg-dark w-100 align-items-center justify-content-center'>
        
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href='https://github.com/redolfosei' target={'_blank'}><i className='bi bi-github text-secondary'></i></a></li>
                <li><a href='https://www.linkedin.com/in/redolf' target={'_blank'}><i className='bi bi-linkedin text-secondary'></i></a></li>
                <li><a href='https://twitter.com/redolfosei' target={'_blank'}><i className='bi bi-twitter text-secondary'></i></a></li>
                <li><a href='mailto:redolf639@gmail.com' target={'_blank'}><i className='bi bi-envelope text-secondary'></i></a></li>
            </ul>
        </div>

        <div className='email-container'>
            <p>redolf639@gmail.com</p>
        </div>

        <main>
          <p className='hi_name'>Hi, My name is</p>
          <h1 className='text-white'>Redolf Kwame Osei.</h1>
          <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 90,
              strings: ["I am a web developer.", "Apps have to be usable...", "Before they can be reusable."]
            }}
          />
          </h2>
          <p className='detail'>
            I am a software engineer speciliazing in building web apps and designing as well. <br/>
            Exceptional Technical Support experience. Currently, I'm focused on building python applications. <br/>
            Learning on how to build on the blockchain technology.  
          </p>
          <button className='bg-transparent'>Check out More</button>
        </main>
    </div>
  )
}

export default Home