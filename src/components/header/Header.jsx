import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <div>
        <header>
          <div className="container header_container">
            <h5>안녕하세요</h5>
            <h1>장채윤</h1>
            <h5 className="text-ligt">부천대학교 재학중</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
              <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
          </div>
        </header>
    </div>
  )
}

export default Header
