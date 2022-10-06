import React from 'react'
import mob1 from '../assets/mob1.png'
import '../styles/hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-text'>
          <h1>An easier <br/> Responsile <br/> <span>Banking</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque alias doloribus.</p>
          <div className="btns">
            <button>Get Started</button>
            <button>Watch video</button>
          </div>
        </div>
        <div className='hero-img'>
            <img src={mob1} alt="mobile" />
        </div>
    </section>
  )
}

export default Hero