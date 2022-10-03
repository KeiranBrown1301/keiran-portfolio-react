import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar/Sidebar'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ctzsdj3',
        'template_ll2cdcu',
        refForm.current,
        'QidLNNJLFb8EoYnhI'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Message failed to send')
        }
      )
  }

  return (
    <>
      <Sidebar />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm open to any job opportunities, from freelance to full time work.
            If you have any questions or want to chat, please feel free to
            contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Smithy Smith,
          <br />
          Japan,
          <br />
          108-0073 Minato-ku <br />
          Mita 2-16-14 <br />
          <span>kbpamu@gmail.com</span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
