import React from 'react'
import '../styles/header.css'
const Header = () => {
  return (
    <nav>
      <div className="logo">
      <h1><span>U</span>noBank<span>.</span></h1>
      </div>
      <ul className="nav-links">
       <li>Home</li>
       <li>About</li>
       <li>Loans</li>
      </ul>
      <div className="buttons">
     <button>
        Signin
     </button>
      </div>
    </nav>
  )
}

export default Header