import React from 'react'
import mob2 from '../assets/mob2.png'
import mob3 from '../assets/mob3.png'
import '../styles/service.css'
const Services = () => {
  return (
    <div className='services'>
        <h1>Services</h1>
      <div className='service-sec'>
     <div className="services-img">
     <img src={mob2} alt="mobile" />
     </div>
     <div className="services-text">
      <div className="service-card">

      </div>
      <div className="service-card">

      </div>
     </div>
    </div>
    <div className='calculators'>
    <h1>Plan smarter, stay ahead
    Calculate & plan</h1>
    <div className="calc-area">
      
      <div className="text">
        <div className="service-card">

       </div>
        <div className="service-card">

        </div>
        <div className="service-card">

        </div>
        <div className="service-card">

        </div>
      </div>
      <div className="img">
      <img src={mob3} alt="mobile-3" />
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default Services