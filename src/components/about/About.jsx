import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>자기소개</h5>
      <h2>나에 대해</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about-icon'/>
              <h5>경험</h5>
              <small>없습니다.</small>
            </article>

            <article className="about__card">
              <FiUsers className='about-icon'/>
              <h5>같이 프로젝트했던 동료둘</h5>
              <small> 9+ 명</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about-icon'/>
              <h5>프로젝트</h5>
              <small>5+ 개 완료</small>
            </article>
          </div>

          <p>
          성실하고, 맡은 임무는 열심히!!! 타인에게 피해를 주지 말아야 하고, 타인들을 배려할줄 알고, 타인의 말을 경청해서 듣는 사람입니다.
          </p>

          <a href="#contact" className="btn btn-primary">연락</a>
        </div>
      </div>
    </section>
  )
}

export default About
