import { useState } from 'react'
import { NavLink,Link,useNavigate, Navigate } from 'react-router-dom'
import  Hamburger from '../assets/icon/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogout=()=>{
  localStorage.removeItem("authToken");
  Navigate("/login");
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
            
          {
            (localStorage.getItem("authToken"))?
            <li>
            <NavLink to="/myorders">My Orders</NavLink>
          </li>:""

          }
            <div className="d-flex">
              {
            (!localStorage.getItem("authToken"))?
            <>
              <Link to="/login" className="btn btn-success mx-1">Login</Link>
           
              <Link to="/signup" className="btn btn-danger">SignUp</Link>
              </>:
              <>
              <Link to="/mycart" className="btn btn-success mx-2">My Cart  <span style={{color:"black", background:"white", border:"50%",padding:"6px",borderRadius:"32px"}}>2</span>
              
              
              </Link>
              <Link to="/signup" className="btn btn-danger" onClick={handleLogout}>Logout</Link>
              </> 
              }
              </div>
          </ul>

         
            
        </div>
      </div>
    </nav>
  )
}

export default Navbar