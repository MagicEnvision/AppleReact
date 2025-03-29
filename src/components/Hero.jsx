import React, { useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {heroVideo,  smallHeroVideo} from '../utils/utils.js'


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  useGSAP(() => (
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 1.5
    })

  ), [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flexCenter flex-col'>
      <p className='hero-title text-zinc-300'>iPhone 16 Pro</p>
      <div className='md:w-10/12 w-9/12'>
        <video autoPlay muted playsInline={true} key={videoSrc} type="video/mp4">
        <source src={videoSrc}/>
        </video>
      </div>
      </div>
    </section>
    )
}

export default Hero