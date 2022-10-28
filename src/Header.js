import React from 'react'
import Image from './image/ajay.png'



function Header() {
  
  return (
    <>
    <div className='wrapper' id='header'>
     
     <div className='row header-overflow' >
     <div className='col-md-6 col-sm-12 right_header res-img '>
            <img src={Image} alt="img" height={'400px'} width={'auto'} />
        </div>
     <div className='col-md-6 col-sm-12 left-header'> 
     <button className='custom-button'>Hello There!</button>
     <h1 className='header_h1'>I'm Ajay yadav</h1>
     <h4 className='header_h4'>FullStack Developer</h4>
     <div className='profile_info'>   
     <span className='header_p'><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp; &nbsp; Gyanpur  Bhadohi 221304 UttarPradesh India</span>
     <span className='header_p'><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp; +91 8858365665</span>
     <span className='header_p'><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;yajay3433@gmail.com</span>
     </div>
     <div className='social'>
     <a href='https://www.linkedin.com/in/ajay-kumar-3969181a7/' class="fa-brands fa-linkedin link"></a>
     <a href='https://www.facebook.com/profile.php?id=100044275923021&sk=friends'class="fa-brands fa-facebook fb"></a>
     <a href='https://github.com/Ajayyadav1999'  class="fa-brands fa-github git"></a>
     <a href='https://www.instagram.com/yadavajju012/' class="fa-brands fa-square-instagram insta"></a>
     </div>

     </div>

       
     </div>

     </div>
    </>

  )
}

export default Header