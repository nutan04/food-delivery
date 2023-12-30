import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  Hamburger from '../assets/icon/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
Food
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={Hamburger} alt="" className='Hamburgicon'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`} style={{zIndex:"1"}}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar