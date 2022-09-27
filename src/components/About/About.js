import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './about.scss'

function About() {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>I'm a frontend developer currently living in Tokyo. I absolutely love using my creative side together in combination with logic and my problem solving skills in order to create beautiful looking functional apps.</p>
        <p>Since moving to Tokyo, I've been working as an English Language Instructor and then before that in Australia as an Operations Associate. I took a leap and enrolled in the Full Stack Web Dev course at Le Wagon and the rest is history!</p>
        <p>Naturally, most of my time is dedicated to coding but when I have a free moment I love to find new ramen spots that I haven't been to before around Tokyo (Jiro FTW!) as well as a bit of gaming here and there and finally Brazilian Jiu-jitsu to keep healthy!.</p>
      </div>
    </div>
  )
}

export default About
