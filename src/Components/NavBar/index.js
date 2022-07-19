import React from 'react'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
     <NavLink to="/">
      <h1>Logo</h1>
     </NavLink>
     <Bars />
     <NavMenu>
      <NavLink to="/movies" activeStyle>Movies</NavLink>
      <NavLink to="/tvshows" activeStyle>TV Shows</NavLink>
      <NavLink to="/animations" activeStyle>Animations</NavLink>
      <NavLink to="/plans" activeStyle>Plans</NavLink>
     </NavMenu>
     <NavBtn>
      <NavBtnLink to="/signin">Search</NavBtnLink>
     </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar
