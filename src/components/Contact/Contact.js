import React from 'react'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar/Sidebar'
import './contact.scss'

function Contact() {
  return (
    <>
      <Sidebar />
      <div>Contact Me</div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact
