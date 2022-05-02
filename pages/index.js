#!/usr/bin/env node

const css = {
  Header: 'freight-neo sticky flex h-screen top-0 right-0 text-center text-blue-700 text-9xl col-span-2 justify-center items-center',
  Square: {
   div: 'grid justify-center w-full items-center aspect-square bg-red-200 text-red-700 text-5xl text-center my-24',
   h1: 'freight-neo text-center text-red-300 text-2xl'
  },
  Sticky: {
    section: 'absolute top-0 left-0 grid grid-cols-3 w-full h-full bg-red-600/[.08]',
    div: 'sticky overflow-y-scroll col-span-1 col-start-3 h-screen top-0 right-0 bg-red-400 p-16',
    h1: 'absolute freight-neo text-center text-red-500 top-0 left-0 w-full my-16 text-3xl'
  },
  PlaceHolder: {
    section: 'flex items-center justify-center min-h-screen',
    h1: 'freight-neo text-center text-5xl'
  }
}

const Header = ({ text = ['hero', 'title', 'text'], caption = 'left sticky'}) => (
  <div className={css.Header}>
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

const Square = ({ text }) => (
  <div className={css.Square.div}>
    <div>
      <h1 className={css.Square.h1}>Media</h1>
      {
        text
        ? <h1>Image</h1>
        : null
      }
    </div>
  </div>
)

const Sticky = () => (
  <section className={css.Sticky.section}>
    <Header />
    <div className={css.Sticky.div}>
      <h1 className={css.Sticky.h1}>right sticky</h1>
      <Square />
      <Square />
      <Square />
    </div>
  </section>
)

const PlaceHolder = ({ bg = 'bg-slate-100', fg = 'text-slate-200', text }) => (
  <section className={`${css.PlaceHolder.section} ${bg}`}>
    {
      text
      ? <h1 className={`${css.PlaceHolder.h1} ${fg}`}>{text}</h1>
      : null
    }
  </section>
)

const Home = () => (
  <main>
    <section className='relative'>
      <Sticky />
      <PlaceHolder bg='bg-blue-200' fg='text-blue-300' text='underlay 1' />
      <PlaceHolder bg='bg-blue-400' fg='text-blue-500' text='underlay 2' />
    </section>

    <PlaceHolder bg='bg-teal-200' fg='text-teal-300' text='section 1' />
    <PlaceHolder bg='bg-teal-400' fg='text-teal-500' text='section 2' />
    <PlaceHolder bg='bg-teal-600' fg='text-teal-700' text='section 3' />
  </main>
)

export default Home
