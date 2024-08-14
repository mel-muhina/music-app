import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom"
import "./Nav.css";


export default function Nav() {
    return (
        <>
          <nav>
            <h1>Logo</h1>
            <ul className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/albums">Albums</NavLink>
              <NavLink to="/lyrics">Lyrics</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          
          </nav>
         <Outlet />
         </>
  )
}
