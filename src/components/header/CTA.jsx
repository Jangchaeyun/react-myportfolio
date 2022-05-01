import React from 'react'
import CV from '../../assets/나의 포토폴리오.pdf';

const CTA = () => {
  return (
    <div>
        <div className='cta'>
            <a href={CV} download className='btn'>포토폴리오 다운로드</a>
            <a href="#contact" className='btn btn-primary'>연락</a>
        </div>
    </div>
  )
}

export default CTA