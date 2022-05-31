#!/usr/bin/env node

import { useState } from 'react'
import Image from 'next/image'

const SideSquare = ({ img, start }) => (
  <div
  className={`
    relative grid justify-center w-full items-center
    aspect-square bg-white my-8 scroll-element col-span-7 ${start}
  `}>

    { img &&
      (
        <Image layout='fill' alt='' src={img} />
      )
    }
  </div>
)

const SideBar = () => (
  <div className={`
    sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0
    scroll-container bg-slate-300 grid grid-cols-12 scroll-py-20
  `}>

    <h1 className={`
      col-span-12 text-white freight-neo text-center top-0 left-0 text-3xl pt-6 mb-8 sticky
    `}>featured work</h1>

    <SideSquare img='/images/side/SIDE1.png' start='col-start-5' />
    <SideSquare img='/images/side/SIDE2.png' start='col-start-2' />
    <SideSquare img='/images/side/SIDE3.png' start='col-start-5' />
    <SideSquare img='' start='col-start-2' />
    <SideSquare img='' start='col-start-5' />

  </div>
)

const HeroText = ({ text = ['title', 'text'], subtext = 'subtext' }) => {
  return (
    <div className={`
      freight-neo sticky flex h-screen top-0 text-center text-white
      text-9xl col-span-2 justify-center items-center
    `}>
      <div>
        <h1 className='text-xl pb-12'>{subtext}</h1>
        {
          Array.isArray(text) && text.length
            ? text.map((val, ind) => (<h1 key={ind}>{val}</h1>))
            : null
        }
      </div>
    </div>
  )
}
22
const Section = ({ children, bg = 'bg-slate-100', span = 'col-span-10 col-start-2' }) => (
  <div className={`min-h-screen grid grid-cols-12 ${bg}`}>
    <div className={`${span} grid grid-cols-12 gap-14 m-14`}>
      {children}
    </div>
  </div>
)

const Home = () => {
  // sidebar closed
  const [span, setSpan] = useState('col-span-10 col-start-2')
  // sidebar open
  // const [span, setSpan] = useState('col-span-8 col-start-1')

  return (
      <main>

      <div className='relative'>

        <div className='absolute top-0 left-0 grid grid-cols-3 w-full h-full'>
          <HeroText text={['featuring', 'art', 'by', 'john ivy']} subtext='abrupt pause' />
          <SideBar />
        </div>

        <div className='min-h-screen bg-center bg-cover bg-white text-slate-200' style={{backgroundImage: `url('/images/main/hero.jpg')`}}></div>
        <div className='min-h-screen bg-slate-200'></div>

      </div>

      <Section bg='bg-slate-400' span={span}>
        <div className='relative col-span-8 col-start-3 aspect-7/5 bg-slate-500 self-center'>
        </div>
      </Section>

      <Section span={span}>
      <div
        className='relative col-span-8 aspect-5/7 self-start'
      >
        <Image alt='' src='/images/main/JIV1.jpg' layout='fill' />
      </div>
      <div
        className='relative col-span-4 aspect-4/5 self-end mb-24'
      >
        <Image alt='' src='/images/main/JIV2.jpg' layout='fill' />
      </div>
      </Section>

      <Section bg='bg-slate-200' span={span}>
        <div
          className='relative col-span-6 aspect-2/3 self-start'
        >
          <Image alt='' src='/images/main/JIV3.jpg' layout='fill' />
        </div>
        <div className='col-span-6 self-end font-extralight text-2xl'>
            <h1 className='freight-neo mb-14 font-normal text-3xl text-slate-400'>{'Pterodactyl-543'}</h1>
            {[
              `So, in not thinking too much about what I'm trying to do, and just doing it.`,
              `For me, I rarely approach a work with a preconception of how it should look. It's much too frustrating, and I'm just not that good.`,
              `My best laid plans are never realized, and often what I end up with has little or nothing to do with my initial premise.`,
              `It's not a very efficient way to work, I suppose.`
              ].map((val, ind) => (<p key={ind} className='mb-4'>{val}</p>))
            }
        </div>
      </Section>

      <Section span={span}>
        <div
          className='relative col-span-6 aspect-4/5 self-start'
        >
          <Image alt='' src='/images/main/JIV4.jpg' layout='fill' />
        </div>
        <div
          className='relative col-span-5 aspect-square self-end'
        >
          <Image alt='' src='/images/main/JIV5.jpg' layout='fill' />
        </div>
      </Section>
    </main>
  )
}

export default Home
