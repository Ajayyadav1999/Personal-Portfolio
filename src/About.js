import React from 'react'
import Image from './image/about.png'


function About() {
  
  return (
    <>
    <div className='container custom-container' >
    <div className='row about pt-5' id='about'>

    <div className='col-md-6 res-ab'>
          <h1>About Me</h1>
          <p>I am Ajay yadav from India. I hve completed my Post graduatiom in Masters in Computer Applications. 
           I have worked on HTML , CSS , Javascript , ReactJs ,Redux , Mysql , NodeJs Technologies. 
          I am a person who is positive in every aspect of life.
           I believe that a person should work on developing their professional skills and learning new things all the time.
           </p>
           <a href='resume.pdf' className='custom_btn' download>Download CV &nbsp; <i class="fa-solid fa-download"></i></a>
           </div>
        <div className='col-md-6 '>  <img src={Image} alt="img" className='ab_img' /> </div>
      

    </div>
    </div>
    </>
  )
}

export default About