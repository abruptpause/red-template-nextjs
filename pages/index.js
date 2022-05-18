#!/usr/bin/env node

const Header = ({ text = ['hero', 'title', 'text'], caption = 'left sticky' }) => {
  return (
    <div className={`
      freight-neo sticky flex h-screen top-0 text-center text-white
      text-9xl col-span-2 justify-center items-center
    `}>
      <div>
        <h1 className='text-xl pb-12'>{caption}</h1>
        {
          Array.isArray(text) && text.length
            ? text.map((line, key) => (<h1 key={key}>{line}</h1>))
            : null
        }
      </div>
    </div>
  )
}

const Square = ({ img, start }) => {
  return (
    <div
    className={`
      bg-cover bg-center relative grid justify-center w-full items-center
      aspect-square bg-white my-8 scroll-element col-span-7 ${start}
    `}
    style={{
      backgroundImage: `url('${img}')`
    }}>
    </div>
  )
}

// the header and the right bar.
const Sticky = () => {
  return (
    <section className='absolute top-0 left-0 grid grid-cols-3 w-full h-full'>
      <Header text={['featuring', 'art', 'by', 'john ivy']} caption='abrupt pause' />
      <div className={`
        sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0
        scroll-container bg-slate-300 grid grid-cols-12 scroll-py-20
      `}>
        <h1 className={`
          col-span-12 text-white freight-neo text-center top-0 left-0 text-3xl pt-6 mb-8 sticky
        `}>featured work</h1>
        <Square img='/images/side/SIDE1.png' start='col-start-5' />
        <Square img='/images/side/SIDE2.png' start='col-start-2' />
        <Square img='/images/side/SIDE3.png' start='col-start-5' />
      </div>
    </section>
  )
}

const PlaceHolder = ({ bg = 'bg-white', fg = 'text-slate-200', img, text }) => {
  return (
    <section
      className={`flex items-center justify-center min-h-screen bg-center bg-cover ${bg}`}
      style={{
        backgroundImage: `url('${img}')`
      }}
    >
      {
      text
        ? <h1 className={`freight-neo text-center text-5xl ${fg}`}>{text}</h1>
        : null
      }
    </section>
  )
}

// col-span-8
// col-span-10 col-start-2
const Section = ({ children, bg = 'bg-slate-100' }) => (
  <div className={`min-h-screen grid grid-cols-12 ${bg}`}>
    <div className='col-span-8 grid grid-cols-12 gap-14 m-14'>
      {children}
    </div>
  </div>
)

const First = (
  <>
    <div
      className='col-span-8 bg-center bg-cover aspect-5/7 self-start'
      style={{
        backgroundImage: `url('/images/main/JIV1.jpg')`
      }}
    >
    </div>
    <div
      className='col-span-4 bg-center bg-cover aspect-4/5 self-end mb-24'
      style={{
        backgroundImage: `url('/images/main/JIV2.jpg')`
      }}
    >
    </div>
  </>
)

const Second = (
  <>
    <div
      className='col-span-6 bg-center bg-cover aspect-2/3 self-start'
      style={{
        backgroundImage: `url('/images/main/JIV3.jpg')`
      }}
    >
    </div>
    <div className='col-span-6 self-end font-extralight text-2xl'>
        <h1 className='freight-neo mb-14 font-normal text-3xl text-slate-400'>{`Pterodactyl-543`}</h1>
        <p className='mb-4'>{`So, in not thinking too much about what I'm trying to do, and just doing it.`}</p>
        <p className='mb-4'>{`For me, I rarely approach a work with a preconception of how it should look. It's much too frustrating, and I'm just not that good.`}</p>
        <p className='mb-4'>{`My best laid plans are never realized, and often what I end up with has little or nothing to do with my initial premise.`}</p>
        <p className='mb-4'>{`It's not a very efficient way to work, I suppose.`}</p>
    </div>
  </>
)

const Third = (
  <>
    <div
      className='col-span-6 aspect-4/5 bg-center bg-cover self-start'
      style={{
        backgroundImage: 'url(\'/images/main/JIV4.jpg\')'
      }}
    >
    </div>
    <div
      className='col-span-5 aspect-square bg-center bg-cover self-end'
      style={{
        backgroundImage: 'url(\'/images/main/JIV5.jpg\')'
      }}
    >
    </div>
  </>
)

const Home = () => (
  <main>
    <div className='relative'>
      <Sticky />
      <PlaceHolder img='/images/main/hero.jpg' />
      <PlaceHolder bg='bg-slate-200' />
    </div>

    <Section>
      {First}
    </Section>

    <Section bg='bg-slate-200'>
      {Second}
    </Section>

    <Section>
      {Third}
    </Section>
  </main>
)

export default Home
