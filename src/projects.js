import React from 'react'
import ShopImage from './image/shop.png'
import VehicleImage from './image/vehicle.jpg'
import Tour from './image/tour.png'




function projects() {
  return (
    <div className='container pt-5' id='projects'>
        <h2 className='h1'>Projects</h2>
        <div className='row pt-5'>
            <div className='col-sm-4 col-md-4'>
            <div class="card res-card" style={{width:'18 rem'}}>
            <img src={ShopImage} alt="img" className='project_image' style={{padding:'10%'}}  />
  <div class="card-body">
    <h4 className='heading'>E-Shop</h4>
    <p class="card-text c_text">E-shop was a e-commerce  application made with HTML,CSS,JAVASCRIPT,MYSQL,PHP. I made it in college event name Real-Life Project Exhibition and I was the winner of this event.</p>
  </div>
</div>
            </div>
            <div className='col-sm-4 col-md-4'>
            <div class="card res-card" style={{width:'18 rem'}}>
            <img src={VehicleImage} alt="img" className='project_image'  />
  <div class="card-body">
    <h4 className='heading'>Vehicle Rental Agency</h4>
    <p class="card-text c_text">In Rental agency Project it was made for the people to take vehicles on rent.It was group project and made in HTML,CSS,JAVASCRIPT from my side and backend done by other team member.</p>
  </div>
</div>
            </div>
            <div className='col-sm-4 col-md-4'>
            <div class="card res-card" style={{width:'18 rem'}}>
            <img src={Tour} alt="img" className='project_image' />
  <div class="card-body">
    <h4 className='heading'>Tour and Travels</h4>
    <p class="card-text c_text">This project was for planning the vacations for family and friends. It was  individual projects and used the same Technologies HTML,CSS,JAVASCRIPT,MYSQL,PHP. It was the minor project as per my college syllabus.</p>
  </div>
</div>
            </div>

        </div>
        
    </div>
  )
}

export default projects