import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'COMMON',
        review: '프로젝트를 진행할때 의사소통이 중요하다는 것을 프로젝트들을 진행하면서 의사소통 능력을 길렀습니다.'
    },
    {
        avatar: AVTR2,
        name: 'Promming',
        review: '동료들과 함께 의사소통을 하면서 작업을 하다보니 오해도 생기지 않고 프로젝트를 진행하는 것이 재밌었습니다.'
    },
    {
        avatar: AVTR3,
        name: 'Movie',
        review: '처음하는 개인 프로젝트이다보니 힘든 점도 많았지만 하다보니 스스로 문제 해결 능력도 기르고, 다 완성한 뒤의 성취감이 몰려왔습니다.'
    },
    {
        avatar: AVTR4,
        name: 'My Portfolio',
        review: '두 번째하는 개인 프로젝트이다 보니 첫번째 보다는 수월했지만, 아직도 혼자 문제를 해결하려다 보니 아직 힘들었지만, 혼자 한 만큼 마치고 난후 성취감이 배가 되었습니다.'
    }

]

const Testimonials = () => {
    return (
        <section id='testmonials'>
            <h5>프로젝트에서 얻은 것</h5>
            <h2>후기</h2>

            <Swiper className="container testimonials__container"
                  // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) =>{
                        return(
                            <SwiperSlide key={index}className="testimonial">
                                <div className="project__avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className='project__name'>{name}</h5>
                                <small className='project__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials