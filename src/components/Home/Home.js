import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="the developer" />
          lobodan
          <br />
          web developer
        </h1>
        <h2>Frontend Deeloper</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
