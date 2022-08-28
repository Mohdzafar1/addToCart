import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className='navbar bg-primary'>
      <div className="container">
      <a href="" className='navbar-brand'>Shopping Cart</a>
      <a ><i class="fas fa-shopping-cart fa-2x"></i>
     </a>
      </div>
        </nav>
    </div>
  )
}

export default Navbar