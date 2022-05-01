import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
          <h5>내가 가지고 있는 언어 스킬</h5>
          <h2>나의 경험</h2>
          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>프론트엔드 개발</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill class='experience__details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill class='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>중간</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill class='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill class='experience__details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>증간</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill class='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
               </div>
              </div>
              <div className="experience__backend">
                <h3>백엔드 개발</h3>
                <div className="experience__content">
                  <article className='experience__details'>
                    <BsPatchCheckFill class='experience__details-icon'/>
                    <div>
                      <h4>NODE JS</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill class='experience__details-icon'/>
                    <div>
                      <h4>MongoDB</h4>
                      <small className='text-light'>중간</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill class='experience__details-icon'/>
                    <div>
                      <h4>MySQL</h4>
                      <small className='text-light'>기본</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill class='experience__details-icon'/>
                    <div>
                      <h4>Oracle</h4>
                      <small className='text-light'>중간</small>
                    </div>
                  </article>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Experience
