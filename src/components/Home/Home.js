import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './home.scss'

function Home() {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, <br /> I'm</h1>
        <img src={LogoTitle} alt="the developer" />
      </div>
    </div>
  )
}

export default Home
