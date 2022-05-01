#!/usr/bin/env node

const StickyImage = () => (
  <div className="grid justify-center w-full items-center aspect-square bg-red-200 text-red-700 text-5xl text-center my-24">
    <div>
      <h1>Image</h1>
    </div>
  </div>
)

const Sticky = () => (
  <section className='absolute top-0 left-0 grid grid-cols-3 w-full h-full bg-red-600/[.08]'>
      <div className='overflow-y-scroll col-span-1 col-start-3 h-screen top-0 right-0 sticky bg-red-400 p-16'>
        <StickyImage />
        <StickyImage />
        <StickyImage />
      </div>
  </section>
)

const PlaceHolder = ({ bg = 'bg-slate-200', fg = 'text-slate-700' }) => (
  <section className={`flex items-center justify-center min-h-screen ${bg}`}>
    <h1 className={`text-center text-5xl capitalize ${fg}`}>Section</h1>
  </section>
)

const Home = () => (
  <main>
    <section className='relative'>
      <Sticky />
      <PlaceHolder bg='bg-blue-200' fg='text-blue-700' />
      <PlaceHolder bg='bg-blue-400' fg='text-blue-700' />
    </section>
    <PlaceHolder bg='bg-teal-200' fg='text-teal-700' />
    <PlaceHolder bg='bg-teal-500' fg='text-teal-700' />
    <PlaceHolder bg='bg-teal-800' fg='text-teal-700' />
  </main>
)

export default Home
