import React from 'react'
import './App.css';
import { useEffect } from 'react';

function Navbar() {


    const checkPos = () =>{
        const position = window.pageYOffset;
        if(position >80){
            document.getElementById('main-nav').classList.add('change_nav');
        }
        else{
            document.getElementById('main-nav').classList.remove('change_nav');

        }
    }

    
   
    useEffect(() => {
        // Update the document title using the browser API
        console.log('mounted')
        window.addEventListener("scroll", checkPos)
        
      },[]);
    
  return (
    <div>
    <nav className="navbar" id="main-nav">
        <div className="logo">Ajay</div>
        <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="menu">
            <li><a href="#header " className='res-li'>Home</a></li>
            <li><a href="#about " className='res-li'>About</a></li>
            <li><a href="#experiences " className='res-li'>Experiences</a></li>
            <li><a href="#skills " className='res-li'>Skills</a></li>
            <li><a href="#projects " className='res-li'>Projects</a></li>
            <li><a href="#contact " className='res-li'>Contact</a></li>

        </div>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar