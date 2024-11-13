import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <h1>Ev Cars</h1>
        </div>
        <div className="nav-menu">
            <ul>
                <li>Home</li>
                <li>Expolre</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav