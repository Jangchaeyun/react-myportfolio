import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>My Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#">홈</a></li>
        <li><a href="#about">나에 대해</a></li>
        <li><a href="experience">경험</a></li>
        <li><a href="#services">서비스</a></li>
        <li><a href="#portfolio">프로젝트</a></li>
        <li><a href="#contact">연락</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; My Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
