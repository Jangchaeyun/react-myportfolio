import React from 'react'
import {BiCheck} from 'react-icons/bi'
import '../services/services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>네가 한 것</h5>
      <h2>서비스</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX 다자인</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>졸업작픔 Recipe Moa Moa</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>융복합 프로젝트 Promming</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>HTML</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>졸업작픔 Recipe Moa Moa</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>융복합 프로젝트 Promming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>개인 프로젝트 MyPorfolio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>동아리 Commmon</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>REACT/NODE.JS</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>개인프로젝트 Movie</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services