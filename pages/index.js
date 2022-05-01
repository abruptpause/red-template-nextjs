#!/usr/bin/env node

const PlaceHolder = ({ bg = 'bg-slate-50', text = 'section' }) => (
  <section className={`flex items-center justify-center min-h-screen ${bg}`}>
    <h1 className='text-center text-5xl capitalize'>{text}</h1>
  </section>
)

const Sticky = ({ bg = 'bg-sky-500/[.01]', text = 'sticky' }) => (
  <section className={ `absolute top-0 left-0 grid grid-cols-3 w-full h-full ${bg}` }>
    <div className='bg-green-200 col-span-1 col-start-3'>
      <div className='h-screen top-0 right-0 sticky flex bg-teal-600 items-center justify-center p-10'>
        <p className='text-center text-4xl capitalize'>{text}</p>
      </div>
    </div>
  </section>
)

const Home = () => (
  <main>
    <section className='relative'>
      <Sticky />
      <PlaceHolder bg='bg-teal-100' />
      <PlaceHolder bg='bg-blue-400' />
    </section>
    <PlaceHolder bg='bg-teal-200' />
    <PlaceHolder bg='bg-blue-500' />
  </main>
)

export default Home
