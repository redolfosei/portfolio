import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id='contact' className='contact bg-dark w-100 bg-dard d-flex flex-column justify-content-center align-items-center'>
        <div className='w-50 text-center '>
            <h1 className='text-white'>Get in Touch</h1>
            <p className='detail'>My inbox is always open as I'm looking for new opportunities.
            You can just ask me question here and I will try to get back to you 
            as quikcly as I can. 
            </p>
            <a href='mailto:redolf639@gmail.com' target={'_blank'}><button className='bg-transparent'>Say Hi!</button></a>
        </div>
    </div>
  )
}

export default Contact