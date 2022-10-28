import React from 'react'
import Cont from './image/contact.png'


function Contact() {
  return (
    <div className='container contact pt-5' id='contact'> 
        <h1>Contact Me</h1>
        <div className='container padd '>
        <div className='row'>
          <div className='col-sm-4 col-md-4 '> <span className='text_con'>Email </span><p className='para'> yajay3433@gmail</p></div>
          <div className='col-sm-4 col-md-4 '> <span className='text_con'>Contact </span><p className='para'> +91 8858365665 </p> </div>
           <div className='col-sm-4 col-md-4 '> <span className='text_con'>Address </span><p className='para'> Prayagraj ,Uttar Pradesh ,INDIA.</p></div>
        </div>
        </div>
        <div className='row contact_row'>
       
        <div className='col-md-6 '>
{/* 
            <div className='con'>
           <h4> Feel Free To Contact :-</h4>
           <br/>
           <p>Address :- Gyanpur, Bhadohi ,UttarPradesh ,India.</p>
           <p>Mob :- +91 8858365665</p>
           <p>Email :- yajay3433@gmail</p>
           <p>Linkedin :-  https://www.linkedin.com/in/ajay-kumar-3969181a7/</p>
            <div className='social'  style={{paddingLeft:"33%"}}>
     <a href='linkedin' class="fa-brands fa-linkedin"></a>
     <a href='facebook'class="fa-brands fa-facebook"></a>
     <a href='github'  class="fa-brands fa-github"></a>
     <a href='instagram' class="fa-brands fa-square-instagram"></a>
     </div>
            </div> */}

<img src={Cont} alt="img" className='contact-image res-con-image' />
            
        </div>

        <div className='col-md-6'>
        <form method="post" action="">


<label for="username">Name</label>
<input type="text" id="username" name="username" placeholder="Enter your name.." autocomplete="off" required />

<label for="Email">Email</label>
<input type="email" id="Email" name="Email" placeholder="Enter your Email.." autocomplete="off" required />



<label for="password">Message</label>
<textarea  id="message" className='textarea' name="w3review" rows="4" cols="35" placeholder="Enter your Message.."></textarea>



<input type="submit" className='custom-button test' name="submit" value="Send Message" />

</form>
          
        </div>

            <div className='col-md-2'></div>
        </div>
         </div>
  )
}

export default Contact