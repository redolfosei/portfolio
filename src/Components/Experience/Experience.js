import React from 'react'
import 'bootstrap/js/dist/tab'
import './Experience.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Experience() {

    useEffect(()=> {
        Aos.init({duration: 1900})
    }, [])  

  return (
    <div id='experience' className='d-flex experience flex-column align-items-center justify-content-center w-100 bg-dark'>
        <div className='w-50 text-white' data-aos = "zoom-in">    
        <h2>Where I have Worked</h2>
        <div className='d-flex mt-5 text-white'>
            <div class="nav flex-column nav-pills border-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-Fiverr-tab" data-bs-toggle="pill" href="#v-pills-Fiverr" role="tab" aria-controls="v-pills-Fiverr" aria-selected="true">Fiverr</a>
                <a class="nav-link" id="v-pills-mycointainer-tab" data-bs-toggle="pill" href="#v-pills-mycointainer" role="tab" aria-controls="v-pills-mycointainer" aria-selected="false">MyCointainer</a>
                <a class="nav-link" id="v-pills-AETech-tab" data-bs-toggle="pill" href="#v-pills-AETech" role="tab" aria-controls="v-pills-AETech" aria-selected="false">AETech</a>
                <a class="nav-link" id="v-pills-FlairTech-tab" data-bs-toggle="pill" href="#v-pills-FlairTech" role="tab" aria-controls="v-pills-FlairTech" aria-selected="false">FlairTech</a>
            </div>
            <div class="tab-content tabs_detail ms-5" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-Fiverr" role="tabpanel" aria-labelledby="v-pills-Fiverr-tab">
                    <h4>Website Developer<a href='https://www.fiverr.com/'> @ Fiverr</a></h4>
                    <span>Dec 2017 - Dec 2022</span>
                    <p>
                        <span>➣</span>
                        I started freelancing in December 2017. I built a lot of website application for clients from different parts
                        of the world.
                    </p>
                    <p>
                        <span>➣</span>
                        They included people from the United Kingdom, United States, India, Nigeria, France etc. 
                        I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    </p>
                    <p>
                        <span>➣</span>
                        I built more than 150+ websites with over 100 happy customers who left 5 stars rating and some of them a very good tip.
                    </p>
                </div>

                <div class="tab-pane fade" id="v-pills-mycointainer" role="tabpanel" aria-labelledby="v-pills-mycointainer-tab">
                <h4>Technical Support<a href='https://www.mycointainer.com/'> @ MyCointainer</a></h4>
                    <span>Jan 2021 - Present</span>
                    <p>
                        <span>➣</span>
                        I started freelancing in December 2017. I built a lot of website application for clients from different parts
                        of the world.
                    </p>
                    <p>
                        <span>➣</span>
                        They included people from the United Kingdom, United States, India, Nigeria, France etc. 
                        I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    </p>
                    <p>
                        <span>➣</span>
                        I built more than 150+ websites with over 100 happy customers who left 5 stars rating and some of them a very good tip.
                    </p>
                </div>

                <div class="tab-pane fade" id="v-pills-AETech" role="tabpanel" aria-labelledby="v-pills-AETech-tab">
                <h4>Website Developer<a href='#'> @ MyCointainer</a></h4>
                    <span>Dec 2017 - Dec 2022</span>
                    <p>
                        <span>➣</span>
                        I started freelancing in December 2017. I built a lot of website application for clients from different parts
                        of the world.
                    </p>
                    <p>
                        <span>➣</span>
                        They included people from the United Kingdom, United States, India, Nigeria, France etc. 
                        I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    </p>
                    <p>
                        <span>➣</span>
                        I built more than 150+ websites with over 100 happy customers who left 5 stars rating and some of them a very good tip.
                    </p>
                </div>

                <div class="tab-pane fade" id="v-pills-FlairTech" role="tabpanel" aria-labelledby="v-pills-FlairTech-tab">
                <h4>Website Developer<a href='#'> @ MyCointainer</a></h4>
                    <span>Dec 2017 - Dec 2022</span>
                    <p>
                        <span>➣</span>
                        I started freelancing in December 2017. I built a lot of website application for clients from different parts
                        of the world.
                    </p>
                    <p>
                        <span>➣</span>
                        They included people from the United Kingdom, United States, India, Nigeria, France etc. 
                        I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    </p>
                    <p>
                        <span>➣</span>
                        I built more than 150+ websites with over 100 happy customers who left 5 stars rating and some of them a very good tip.
                    </p>
                </div>

                
            </div>
        </div>
        </div>    
    </div>
  )
}

export default Experience