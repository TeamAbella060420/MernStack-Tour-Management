import React, { useRef, useEffect } from 'react'
import '../Headers/header.css'
import { Container, Row, Button } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc = () => { // create function that adds and removes a class to toggle sticky navbar feature
    window.addEventListener('scroll', () => { // add an event listener to the window scroll
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){ // checks whether window is scrolled over 80 pixels from the top
            headerRef.current.classList.add('sticky__header') // adds a class to header element to make it sticky
        } else {
            headerRef.current.classList.remove('sticky__header') // removes class to make header element no longer sticky
        }
    })
}

useEffect(() => { // useEffect hook that calls stickyHeaderFunc to update sticky navbar
  stickyHeaderFunc()
  return () => window.removeEventListener('scroll', stickyHeaderFunc) // this cleanup function is to remove the event listener to prevent memory leak
})

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ============== logo =================*/}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            {/* ============== logo end =================*/}
            {/* ============== menu start =================*/}

          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                      <a>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>
                      {item.display}
                    </NavLink>
                      </a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className='btn secondary__btn'>
                <Link to='/login'>
                  Login
                </Link>
              </Button>
              <Button className='btn primary__btn'>
                <Link to='/register'>
                  Register
                </Link>
              </Button>
            </div>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header