import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar/Sidebar'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
          <div>
            <form>
              <ul>
                <li></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
