import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'COMMON',
    github: 'https://github.com/BCU-ComOn/ComOn'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Promming',
    github: 'https://github.com/Jangchaeyun/Promming'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recipe Moa Milkit',
    github: 'https://github.com/Jangchaeyun/Promming'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movie',
    github: 'https://github.com/Jangchaeyun/Moive'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Myportfolio',
    github: 'https://github.com/Jangchaeyun/Myportfolio.git'
  }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>나의 최근 프로젝트</h5>
      <h2>프로젝트</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Porfolio