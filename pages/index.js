#!/usr/bin/env node


const StickyImage = () => (


  <div className="grid justify-center w-full items-center aspect-square bg-blue-300 text-slate-600 text-5xl text-center my-16">
    <div>
      <h1>Image</h1>
    </div>
  </div>
)

const Sticky = () => (
  <section className='absolute top-0 left-0 grid grid-cols-3 w-full h-full bg-red-600/[.08]'>
      <div className='overflow-y-scroll col-span-1 col-start-3 h-screen top-0 right-0 sticky bg-teal-600 p-16'>
        <StickyImage />
        <StickyImage />
        <StickyImage />
      </div>
  </section>
)


const PlaceHolder = ({ bg = 'bg-slate-50', text = 'section' }) => (
  <section className={`flex items-center justify-center min-h-screen ${bg}`}>
    <h1 className='text-center text-5xl capitalize'>{text}</h1>
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
