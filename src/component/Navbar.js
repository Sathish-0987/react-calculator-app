import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{textAlign:'center'}}>
        <nav style={{padding:"10px", backgroundColor:"burlywood"}}>
            <Link to="/" style={{marginRight:"10px"}}>Home</Link>
            <Link to="/About" style={{marginRight:"10px"}}>About Us</Link>
            <Link to="/Contact" style={{marginRight:"10px"}}>Contact Us</Link>
        </nav>
    </div>
  )
}
