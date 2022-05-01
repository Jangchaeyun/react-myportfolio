import React from 'react'
import {BsInstagram, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.instagram.com/codbs1112/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Jangchaeyun" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100011594853230" target="_blank"><BsFacebook/></a>
    </div>
  )
}



export default HeaderSocials