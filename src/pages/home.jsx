import React, { useRef } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  return (
    <div className='text-white overflow-hidden'>
      <div className='h-screen w-screen fixed top-0 left-0'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home