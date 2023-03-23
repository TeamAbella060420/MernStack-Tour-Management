import React from 'react'
import '../Headers/header.css'
import { Container, Row, Button } from 'reactstrap'
import { Navlink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '#',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
]

const Header = () => {
  return (
    <header className="header">
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
                    {item.display}
                  </li>
                ))
              }
            </ul>
          </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header