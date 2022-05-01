import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hq58d4w', 'template_lruz4k9', form.current, 'Q3CgFesJv1fuFyS7m')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>연락</h5>
      <h2>나에게 연락</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>이메일</h4>
            <h5>zzangsally@naver.com</h5>
            <a href="mailto:zzangsally@naver.com" target="_blank">이메일 전송</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>메신저</h4>
            <h5>장채윤</h5>
            <a href="https://m.me/profile.php?id=100011594853230" target="_blank">메신저 보내기</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>전화번호</h4>
            <h5>010-6603-1148</h5>
          </article>
        </div>
        { /* END OF CONTACT OPTIONS */ }
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='너의 이름' required />
          <input type="email" name='email' placeholder='너의 이메일' required />
          <textarea name="message" rows='7' placeholder='너의 메시지' required></textarea>
          <button type='submit' className='btn btn-primary'>전송</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
